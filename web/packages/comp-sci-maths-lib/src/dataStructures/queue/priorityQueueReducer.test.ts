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
    const { lastResult: a } = state; // Indigo
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
    const { lastResult: b } = state; // Tom
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Nina",
      priority: 4,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: c } = state; // Kate
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Gaz",
      priority: 5,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: d } = state; // Gaz
    state = priorityQueueReducer(state, {
      type: "enqueue",
      value: "Steve",
      priority: 2,
    });
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: e } = state; // Joe
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
    const { lastResult: f } = state; // Louise
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: g } = state; // Chris
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: h } = state; // Nina

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
    const { lastResult: i } = state; // Jenny
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: j } = state; // Kirsten
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: k } = state; // Steve
    state = priorityQueueReducer(state, { type: "dequeue" });
    const { lastResult: l } = state; // Nick

    expect(a?.value).toEqual({ value: "Indigo", priority: 10 });
    expect(b?.value).toEqual({ value: "Tom", priority: 9 });
    expect(c?.value).toEqual({ value: "Kate", priority: 7 });
    expect(d?.value).toEqual({ value: "Gaz", priority: 5 });
    expect(e?.value).toEqual({ value: "Joe", priority: 4 });
    expect(f?.value).toEqual({ value: "Louise", priority: 8 });
    expect(g?.value).toEqual({ value: "Chris", priority: 7 });
    expect(h?.value).toEqual({ value: "Nina", priority: 4 });
    expect(i?.value).toEqual({ value: "Jenny", priority: 12 });
    expect(j?.value).toEqual({ value: "Kirsten", priority: 3 });
    expect(k?.value).toEqual({ value: "Steve", priority: 2 });
    expect(l?.value).toEqual({ value: "Nick", priority: 1 });
  });
});
