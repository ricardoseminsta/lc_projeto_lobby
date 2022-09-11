import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface DoormanInstance extends Model {
    id: number;
    name: string;
    cpf: string;
    turn: "manhã/Ttarde" | "tarde/noite";
    active: boolean;
}

export const Doorman = sequelize.define<DoormanInstance>('Doorman', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        //unique: true
    },
    turn: {
        type: DataTypes.STRING,
        //unique: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
    
}, {
    tableName: 'doorman',
});

//Doorman.sync({ alter: true });