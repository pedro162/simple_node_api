import DataStore from 'nedb';
import path from 'path';

const dbFilePath = path.join(process.cwd(), 'data', 'people.db');
const personModel = new DataStore({ filename: dbFilePath, autoload: true });
const dbOrganizationFilePath = path.join(process.cwd(), 'data', 'organizations.db');
const organizationModel = new DataStore({ filename: dbOrganizationFilePath, autoload: true });

export default { personModel, organizationModel };