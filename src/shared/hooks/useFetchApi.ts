import { useEffect, useState } from 'react'

export const useFetchApi = reference => {
	const url = process.env.REACT_APP_URL || ''
	const token = process.env.REACT_APP_AMOCRM_LONG_TERM_TOKEN || ''
	const [dataApi, setDataApi] = useState([])

	console.log(dataApi, 'dataApi-----------')

	const getData = async () => {
		console.log(reference, 'reference-----------')

		const response = await fetch(url + reference, {
			headers: new Headers({ Authorization: 'Bearer ' + token }),
		}).then(response => response.json())
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
