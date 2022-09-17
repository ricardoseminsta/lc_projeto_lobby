import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
// import { sequelize } from '../instances/mysql';

import { Visiter, VisiterInstance } from './Visiter';
import { Doorman, DoormanInstance } from './Doorman';
import { visiter } from '../controllers/visiterController';

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

Visiter.hasMany(Visit, {
    foreignKey: 'id',
});

Visit.belongsTo(Visiter);

Doorman.hasMany(Visit, {
    foreignKey: 'id',
})
Visit.belongsTo(Doorman);

Visit.sync({ force: true })