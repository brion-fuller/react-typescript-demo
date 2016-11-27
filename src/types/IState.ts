import { Reducer } from 'redux';

export interface ICombinedState {
    routing: Reducer<any>;
    update: any;
}

export default ICombinedState;