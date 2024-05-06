import { ProjectCardType } from '@/entities/projectCard'
import { SteckCardType } from '@/entities/steckCard'
import { EducationCardType } from '@/entities/swiperCard'
import axios, { AxiosResponse } from 'axios'

const url = 'http://localhost:8000/'

export const getProject = async () => {
    try {
        const response = await axios.get<
            null,
            AxiosResponse<ProjectCardType[]>
        >(url + 'project')

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getEducation = async () => {
    try {
        const response = await axios.get<
            null,
            AxiosResponse<EducationCardType[]>
        >(url + 'education')

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getSteck = async () => {
    try {
        const response = await axios.get<null, AxiosResponse<SteckCardType[]>>(
            url + 'steck'
        )

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        console.log(error)
    }
}

// export const getContacts = async () => {
//     try {
//         const response = await axios.get<null, AxiosResponse<SteckCardType[]>>(
//             url + 'project'
//         )

//         if (!response.data) {
//             throw new Error()
//         }

//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }
