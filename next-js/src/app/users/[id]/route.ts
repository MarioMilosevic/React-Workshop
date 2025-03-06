import { users } from "../route";


export async function GET(_request:Request, {params} :{params:{id:string}}) {
    const { id } = await params
    console.log(id)
    const user = users.find((user) => user.id === Number(id))
    return Response.json(user)
}
