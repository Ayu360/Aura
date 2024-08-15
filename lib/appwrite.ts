import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint:"https://cloud.appwrite.io/v1",
    platform:"com.ninjaDeveloper.Aura",
    projectId:"66bc971900318d34da86",
    databaseId:"66bc99d90012d85456fc",
    userCollectionId:"66bc9a3c00389a33844a",
    videosCollectionId:"66bc9a78002fc09bd323",
    storageId: "66bc9dd1002c1acc6754"
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email:string, password:string, username:string)
{
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id, 
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;

    }catch(e:any){
        console.log(e)
        throw new Error(e);
    }
}

export async function signIn(email:string, password:string){
    try{
        const emailSession = await account.createEmailPasswordSession(email, password)
        return emailSession;
    }catch(e:any){
        console.log(e)
        throw Error(e);
    }
}