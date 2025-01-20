```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // Your API logic here
  res.status(200).json({ message: 'Success', session });
}
```