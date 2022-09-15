import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../instances/pg';
import { sequelize } from '../instances/mysql';

import { Visiter, VisiterInstance } from './Visiter';
import { Doorman, DoormanInstance } from './Doorman';

export interface VisitInstance extends Model {
    id: number;
    visiterId: number;
    doormanId: number;
    arrived: Date;
    exit: Date;
}

export const Visit = sequelize.define<VisitInstance>('Visit', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    visiterId: {
        type: DataTypes.INTEGER,
    },
    doormanId: {
        type: DataTypes.INTEGER,
    },
    arrived: {
        type: DataTypes.DATE
    },
    exit: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'visit',
    timestamps: false
});

// Visit.sync({ force: true })