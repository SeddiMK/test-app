import { useEffect, useState } from 'react'

export const useFetchApi = reference => {
	const url = process.env.REACT_APP_URL || ''
	const token = process.env.REACT_APP_AMOCRM_LONG_TERM_TOKEN || ''
	const [dataApi, setDataApi] = useState([])

	console.log(dataApi, 'dataApi-----------')

	const getData = async () => {
		console.log(reference.current, 'reference-----------')

		const config = {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers':
				'Content-Type, Authorization, X-Requested-With',
		}

		// const response = await fetch(url + 'leads', {
		// 	mode: 'no-cors',headers,
		// }).then(response => response.json())

		console.log(config, 'config-----------')

		const response = await fetch(
			'https://egorow198704.amocrm.ru/api/v4/leads',
			config
		)
			.then(response => response.json())
			.catch(error => console.error(error))

		// const response = await axios.create({
		// 	baseURL: 'https://egorow198704.amocrm.ru/api/v4/leads',
		// 	timeout: 333,
		// 	mode: 'no-cors',
		// 	headers: { Authorization: `Bearer ${token}` },
		// })

		setDataApi(response)
	}

	useEffect(() => {
		getData()
	}, [])

	// можно сделать чтобы хук возвращал весь объект
	useEffect(() => {
		// dataApi
		console.log(dataApi, 'dataApi useEffect-----------')
	}, [])

	return {
		dataApi,
		// name,
		// price,
		// id,
	}
}
