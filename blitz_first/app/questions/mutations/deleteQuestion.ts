import db, { QuestionDeleteArgs } from "db"

type DeleteQuestionInput = {
  where: QuestionDeleteArgs["where"]
}

export default async function deleteQuestion(
  { where }: DeleteQuestionInput,
  ctx: Record<any, any> = {}
) {
  const question = await db.question.delete({ where })

  return question
}
