export const useTodoState = () => {
  const toDo = useState<string[]>("todo",() => [])
  const complete = useState<string[]>("complete",() => [])

  return { toDo, complete }
}