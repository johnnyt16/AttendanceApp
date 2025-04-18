// types/express/index.d.ts
import { User } from '../user.types'; // adjust path to where your User type is defined

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
