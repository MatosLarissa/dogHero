import { CustomError } from "../../error/CustomError";
import { DogWalk } from "../../model/DogWalk";
import { BaseDatabase } from "../BaseDatabase";


export class DogWalkDataBase extends BaseDatabase {
    protected TABLE_NAME = "dog_walking"

    createWalk = async (dogWalk: DogWalk): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .insert({
                    id: dogWalk.getId(),
                    date: dogWalk.getDate(),
                    price: dogWalk.getPrice(),
                    duration: dogWalk.getDuration(),
                    latitude: dogWalk.getLatitude(),
                    longitude: dogWalk.getLongitude(),
                    number_of_pets: dogWalk.getNumberOfPets(),
                    start_time: dogWalk.getStartTime(),
                    end_time: dogWalk.getEndTime()
                })
        } catch (error) {
            if (error instanceof CustomError) {
                throw new Error(error.message)
            }
        }
        await BaseDatabase.destroyConnection()
    }

    getElementById = async (id: string): Promise<DogWalk | null> => {
        const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where({ id })
        if (!result[0]) {
            throw new Error("Passeio não encontrado pelo id informado")
        }

        return DogWalk.toDogWalk(result[0])
    }

    async insertStartWalk(id: string, startWalk: number): Promise<void> {
        await BaseDatabase
            .connection(this.TABLE_NAME)
            .update({
                start_walk: startWalk
            })
            .where({ id })
    }

    insertFinishWalk = async (id: string, finishWalk: number): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .update({
                    finish_walk: finishWalk
                })
                .where({ id })
        } catch (error) {
            if (error instanceof CustomError) {
                throw new Error(error.message)
            }
        }
        await BaseDatabase.destroyConnection()
    }

    updateStatus = async (id: string, status: string): Promise<void> => {
        try {
            await BaseDatabase
                .connection(this.TABLE_NAME)
                .update({
                    status
                })
                .where({ id })

        } catch (error) {
            if (error instanceof CustomError) {
                throw new Error(error.message)
            }
        }
        await BaseDatabase.destroyConnection()
    }

}