import {
  getInitialPriorityQueueState,
  priorityQueueReducer,
} from "./priorityQueueReducer";

describe("Priority Queue", () => {
  test("Priority Queue", () => {
    let state = getInitialPriorityQueueState<string>(20);

    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Indigo",
      priority: 10,
    });
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Joe",
      priority: 4,
    });
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Kate",
      priority: 7,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const a = state.lastResult?.value; // Indigo
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Tom",
      priority: 9,
    });
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Kirsten",
      priority: 3,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const b = state.lastResult?.value; // Tom
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Nina",
      priority: 4,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const c = state.lastResult?.value; // Kate
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Gaz",
      priority: 5,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const d = state.lastResult?.value; // Gaz
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Steve",
      priority: 2,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const e = state.lastResult?.value; // Joe
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Louise",
      priority: 8,
    });
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Chris",
      priority: 7,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const f = state.lastResult?.value; // Louise

    state = priorityQueueReducer(state, { type: "dequeue" });

    const g = state.lastResult?.value; // Chris
    state = priorityQueueReducer(state, { type: "dequeue" });
    const h = state.lastResult?.value; // Nina

    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Jenny",
      priority: 12,
    });
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Nick",
      priority: 1,
    });

    state = priorityQueueReducer(state, { type: "dequeue" });
    const i = state.lastResult?.value; // Jenny
    state = priorityQueueReducer(state, { type: "dequeue" });
    const j = state.lastResult?.value; // Kirsten
    state = priorityQueueReducer(state, { type: "dequeue" });
    const k = state.lastResult?.value; // Steve
    state = priorityQueueReducer(state, { type: "dequeue" });
    const l = state.lastResult?.value; // Nick

    expect(a).toEqual({ value: "Indigo", priority: 10 });
    expect(b).toEqual({ value: "Tom", priority: 9 });
    expect(c).toEqual({ value: "Kate", priority: 7 });
    expect(d).toEqual({ value: "Gaz", priority: 5 });
    expect(e).toEqual({ value: "Joe", priority: 4 });
    expect(f).toEqual({ value: "Louise", priority: 8 });
    expect(g).toEqual({ value: "Chris", priority: 7 });
    expect(h).toEqual({ value: "Nina", priority: 4 });
    expect(i).toEqual({ value: "Jenny", priority: 12 });
    expect(j).toEqual({ value: "Kirsten", priority: 3 });
    expect(k).toEqual({ value: "Steve", priority: 2 });
    expect(l).toEqual({ value: "Nick", priority: 1 });
  });
});
