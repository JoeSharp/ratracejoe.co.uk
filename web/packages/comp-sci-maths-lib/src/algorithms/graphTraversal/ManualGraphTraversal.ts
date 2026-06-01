import { Graph, getOutgoing } from "../../dataStructures/graph/graphReducer";
import LinkedList from "../../dataStructures/linkedList/LinkedList";
import {
  queueReducer,
  getInitialQueueState,
  QueueState,
} from "../../dataStructures/queue/queueReducer";
import {
  stackReducer,
  getInitialStackState,
  StackState,
} from "../../dataStructures/stack/stackReducer";
import { Producer } from "../../types";
import {
  LinearDataStructureReducer,
  LinearStructureState,
} from "../../dataStructures/linearDataStructure/linearDataStructure";

class ManualGraphTraversal<S extends LinearStructureState<LinkedList<string>>> {
  reducer: LinearDataStructureReducer<LinkedList<string>, S>;
  getInitialState: Producer<S>;

  graph?: Graph;
  state?: S;
  visited: string[];
  errors: number;

  constructor(
    getInitialState: Producer<S>,
    reducer: LinearDataStructureReducer<LinkedList<string>, S>,
  ) {
    this.reducer = reducer;
    this.getInitialState = getInitialState;
    this.visited = [];
    this.errors = 0;
  }

  start(graph: Graph, startingVertex: string): this {
    this.visited = [];
    this.graph = graph;
    this.state = this.getInitialState();
    this.state = this.reducer(this.state, {
      type: "push",
      value: new LinkedList<string>().append(startingVertex),
    });
    this.visited.push(startingVertex);
    this.errors = 0;
    return this;
  }

  getErrors(): number {
    return this.errors;
  }

  assertNext(key: string): this {
    if (!this.graph || !this.state)
      throw new Error("Cannot traverse before calling start");

    const options = this.getNextOptions();
    if (options !== undefined && options.contains((o) => o === key)) {
      this.visit(key);

      // Get all the possible avenues from this point
      const optionsFromVisiting: string[] = getOutgoing(this.graph, key)
        .filter((n) => !this.visited.includes(n.to))
        .map((n) => n.to);

      // Push the list of them onto our linear data structure
      if (optionsFromVisiting.length > 0) {
        this.state = this.reducer(this.state, {
          type: "push",
          value: new LinkedList<string>().appendAll(...optionsFromVisiting),
        });
      }
    } else {
      this.errors++;
    }

    return this;
  }

  assertFinished(): this {
    // If there are items remaining on the linear data structure, then this declaration is incorrect
    if (this.getNextOptions() !== undefined) {
      this.errors++;
    }

    return this;
  }

  getNextOptions(): LinkedList<string> | undefined {
    if (!this.graph || !this.state)
      throw new Error("Cannot traverse before calling start");

    if (this.state.size === 0) {
      return undefined;
    }

    this.state = this.reducer(this.state, { type: "peek" });
    let list = this.state.lastResult;

    while (list?.isEmpty() && this.state.size > 0) {
      this.state = this.reducer(this.state, { type: "pop" });
      if (this.state.size > 0) {
        this.state = this.reducer(this.state, { type: "peek" });
        list = this.state.lastResult;
      }
    }

    if (!list) {
      return undefined;
    }
    return list.size() > 0 ? list : undefined;
  }

  visit(key: string) {
    if (!this.state) throw new Error("Cannot traverse before calling start");

    // Strip out the visited key from all sub linked lists
    this.state.contents
      .filter((c) => c !== undefined && c !== null)
      .forEach((l) => l.removeMatch((k) => k === key));
    this.visited.push(key);
  }
}

export function breadthFirstManualTraversal() {
  return new ManualGraphTraversal<QueueState<LinkedList<string>>>(
    getInitialQueueState,
    queueReducer,
  );
}
export function depthFirstManualTraversal() {
  return new ManualGraphTraversal<StackState<LinkedList<string>>>(
    getInitialStackState,
    stackReducer,
  );
}

export default ManualGraphTraversal;
