const handleEditClient = (req, res, db) => {


    const { id, ClientName, ClientType, ClientActivitySector, ClientTelephoneNumber, ClientEmail, ClientWebsite, ClientJoined } = req.body; //to avoid repeating req.body
    db('clients')
        .returning('*')  //our response is all the columns
        .where('id', '=', id)
        .update({
            clientname: ClientName,
            type: ClientType,
            activitysector: ClientActivitySector,
            telephonenumber: ClientTelephoneNumber,
            email: ClientEmail,
            website: ClientWebsite,
            joined: ClientJoined,
        }).then(client => {
            res.json(client[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit client')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleEditClient: handleEditClient
}