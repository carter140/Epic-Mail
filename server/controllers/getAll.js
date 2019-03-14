
const messages = [];
const getAll= (req, res) =>{
    res.status(200).send({
        status:200,
        data:messages
    })
}
export default getAll;