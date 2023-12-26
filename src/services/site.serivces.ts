import axios from "axios";
import { SiteAddPayload } from "../types";
import { AdminItem, SimulationItem } from "../types";


const baseUrl = 'https://dev-admin.sunrises.io/api/';

export const getSimulations = async(authToken:string) =>{
    const url = 'get-company-simulations';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: SimulationItem[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}



export const getAdmins = async(authToken:string) =>{
    const url = 'user-list-by-role?cid=6583edd0ba0b57bd2d13b7ff&role=siteadmin';

    const response = await axios.get(baseUrl+url, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });

  if (response.status === 200) {
    const data: AdminItem[] | undefined = response.data;
    return data;
  } else {
    console.error('Failed to fetch simulations:', response.status, response.statusText);
  }
}

// import jwt from 'jsonwebtoken';

// export const getAdmins = async (authToken: string) => {
//     // Decode the token to get company ID
//     const decodedToken = jwt.decode(authToken);
  
//     // Get the companyId from the decoded token
//     const companyId = decodedToken ? decodedToken.cid : '';
  
//     // Update the URL with the companyId
//     const url = `user-list-by-role?cid=${companyId}&role=siteadmin`;
  
//     const response = await axios.get(baseUrl + url, {
//       headers: {
//         'Authorization': `Bearer ${authToken}`,
//       },
//     });
  
//     if (response.status === 200) {
//       const data: AdminItem[] | undefined = response.data;
//       return data;
//     } else {
//       console.error('Failed to fetch simulations:', response.status, response.statusText);
//     }
//   }


export const postData = async(formData:SiteAddPayload,authToken:string) =>{

const updatedFormData = {
  ...formData,
  writeadmins:{id:null}
};

const updatedFormData1 = {
  ...updatedFormData,
  writeadmins:[]
};
  console.log(updatedFormData1)
  const url = 'site';
  const response = await fetch(baseUrl+url, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData1),
  });    
  if (response.ok) {
       return response;
    } else {
      console.error('Failed to post data:', response.status, response.statusText);
    }

}
// export const postData = async (formData: SiteAddPayload, authToken: string) => {
//     try {
//       const updatedFormData = {
//         ...formData,
//         companyId: "6583edd0ba0b57bd2d13b7ff",
//         createdAt: null,
//         createdBy: null,
//         readAdmins: [{ id: null }],
//         tutorials: [{ id: null }],
//         updatedAt: null,
//         updatedBy: null,
//         writeAdmins: [{ id: String }],
//       };
  
//       console.log(updatedFormData);
  
//       const url = 'site';
//       const response = await axios.post(baseUrl + url, updatedFormData, {
//         headers: {
//           'Authorization': `Bearer ${authToken}`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.status === 200) {
//         return response;
//       } else {
//         console.error('Failed to post data:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };