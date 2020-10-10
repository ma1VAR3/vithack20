import axios from 'axios';

//contact information and helpline
export const fetchdata=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/contacts")

        return response;
    }
    catch(error){

    }
}

//notifications
export const fetchdata2=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/notifications")

        return response.data.data.notifications;
    }
    catch(error){

    }
}


//hospitals/beds
export const fetchdata3=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/hospitals/beds")

        return response.data.data.regional;
    }
    catch(error){

    }
}

//hospitals/medical-colleges
export const fetchdata4=async () => {
    try{
        const response= await axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")

        return response.data.data.medicalColleges;
    }
    catch(error){

    }
}
