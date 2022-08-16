const handleAddClient = (req, res, db) => {
    const { ClientName, ClientType, ClientActivitySector, ClientTelephoneNumber, ClientEmail, ClientWebsite, ClientJoined } = req.body; //to avoid repeating req.body
    db('clients')
        .returning('*')  //our response is all the columns
        .insert({
            // be careful it's case sensitive , in the db all are lowercase
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
            res.status(400).json('Unable To Add Client')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleAddClient: handleAddClient
}