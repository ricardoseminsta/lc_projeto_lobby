import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';
// import { sequelize } from '../instances/mysql';

import { Visiter } from './Visiter';
import { Doorman } from './Doorman';


export interface VisitInstance extends Model {
    id: number;
    VisiterId: number;
    DoormanId: number;
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
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
});

Visit.belongsTo(Visiter);

Doorman.hasMany(Visit, {
    foreignKey: 'id',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
})
Visit.belongsTo(Doorman);

// Visit.sync({ force: true })