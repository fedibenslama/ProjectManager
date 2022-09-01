const handleAddMember = (req, res, db) => {
    const { MemberName, MemberId, MemberTelephoneNumber, MemberEmail, MemberAddress, MemberAssociatedRoles,
         MemberAccumulatedExp} = req.body; //to avoid repeating req.body
    db('members')
        .returning('*')  //our response is all the columns
        .insert({
            // be careful it's case sensitive , in the db all are lowercase
            membername: MemberName,
            memberid: MemberId,
            membertelephonenumber: MemberTelephoneNumber,
            memberemail: MemberEmail,
            memberaddress: MemberAddress,
            memberassociatedroles: MemberAssociatedRoles,
            memberaccumulatedexp: MemberAccumulatedExp
        }).then(Member => {
            res.json(Member[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Add Member')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleAddMember: handleAddMember
}