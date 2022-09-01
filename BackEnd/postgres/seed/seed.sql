-- Seed data with a fake user for testing
insert into users (name, email, role)
values ('TestUser', 'test@gmail.com', 'admin');
-- insert into login (hash, email)
-- values (
--         '$2a$10$WAK21U0LWl7C//jJ.DOB2uPP1DJQh7KUDgasdyQeGzkop2Pzl8W7u',
--         'test@gmail.com'
--     );
insert into clients (
        clientname,
        type,
        activitysector,
        telephonenumber,
        email,
        website,
        joined
    )
values (
        'TestClient',
        'Physical',
        'Eco',
        96161053,
        'testClient@gmail.com',
        'www.Test.com',
        '31/12/2022'
    );
insert into functionalities (
        functitle,
        funcidcode,
        funcdescription,
        funcstatus,
        funcassociatedreq,
        funcassociatedtasks,
        funcassociatedmemb,
        funcstartdate,
        funcfinishdate,
        funcduration
    )
values (
        'TestFunctionality',
        'Testid',
        'testDesc',
        'on Hold',
        'testReq',
        'testTask',
        'testMemb',
        '31/12/2022',
        '31/12/2023',
        '1 year'
    );
insert into projects (
        name,
        type,
        usedsolutions,
        associatedservers,
        associatedclient,
        status,
        projectprogress,
        startdate,
        finishdate,
        projectdescription
    )
values (
        'TestProject',
        'TestType',
        'TestUsedSolution',
        'TestServers',
        'TestClient',
        'TestStatus',
        43,
        '31/12/2022',
        '31/12/2023',
        'TestDesc'
    );
insert into requirements (
        requirementtitle,
        requirementidcode,
        requirementdescription,
        requirementstatus,
        requirementcreatedby,
        requirementassociatedproject,
        requirementmainrequirement
    )
values (
        'TestReq',
        'TestIdCode',
        'TestDesc',
        'TestStatus',
        'TestCreatedBy',
        'TestAssoProject',
        'TestMainReq'
    );
insert into members (
        membername,
        memberid,
        membertelephonenumber,
        memberemail,
        memberaddress,
        memberassociatedroles,
        memberaccumulatedexp
    )
values (
        'TestMemb',
        'TestIdCode',
        96161053,
        'TestEmail',
        'TestAddress',
        'TestAssoRoles',
        'TestAccuExp'
    );
insert into tasks (
        tasktitle,
        taskidcode,
        taskdescription,
        taskmaintask,
        taskspecification,
        tasknature,
        taskstatus,
        taskpriority,
        taskexpectedduration,
        taskcompletiontime,
        taskmembincharge
    )
values (
        'TestTask',
        'TestIdCode',
        'TestDesc',
        'TestMainTask',
        'TestSpecification',
        'TestNature',
        'TestStatus',
        'TestPriority',
        'TestExpectedDuration',
        'TestCompletionTime',
        'TaskMembInCharge'
    );