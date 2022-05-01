

export enum Lead_Source_Enum {
    Manual,
    Facebook,
    Google

}

export enum Lead_Intent_Enum {
    New_Lead = 'New Lead', // Pendind Leads 
    Cold_Lead = 'Cold Lead',
    Hot_Lead = 'Hot Lead',
    Warm_Lead = 'Warm Lead',
    Dead_Lead = 'Dead Lead'

}


export enum Lead_Status_Enum {
    Assigned, // Default State
    In_Progress = 'In Progress',
    Not_Connected = 'Not Connected',
    Site_Visit_Scheduled = 'SV Scheduled',
    Site_Visit_Completed = 'SV Completed',
    EOI_Completed = 'EOI Completed',
    Booking_Completed = 'Booking Completed'

}