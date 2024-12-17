type User = {
    username:string,age:number
}

// 1 union 

type StringOrNumber = string | number

// 2 intersection 

type Employee={
    name:string,
    startDate:Date
}
type Manager={
    name:string,
    department:string
}

type TeamLead = Employee & Manager

const teamLead : TeamLead = {
    name:'mohit',
    startDate: new Date(),
    department:"opensource"
}