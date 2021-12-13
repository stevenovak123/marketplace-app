import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	collection,
	getDocs,
	query,
	where,
	orderBy,
	limit,
	startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
const Category = () => {
	const [listings, setListings] = useState(null)
	const [loading, setLoading] = useState(true)
	const params = useParams()

	useEffect(() => {
		const fetchListings = async () => {
			try {
				// fetch reference
				const listingsRef = collection(db, 'listings')
				//create a query
				const q = query(
					listingsRef,
					where('type', '==', params.categoryName),
					orderBy('timestamp', 'desc'),
					limit(10)
				)
				//execute the query
				const querySnap = await getDocs(q)
				const listings = []
				querySnap.forEach((doc) => {
					return listings.push({ id: doc.id, data: doc.data() })
				})
				setListings(listings)
				setLoading(false)
			} catch (error) {
				toast.error('Could not load listings')
			}
		}
		fetchListings()
	}, [params.categoryName])

	return (
		<div className='Category'>
			<header>
				<p className='pageHeader'>
					{params.categoryName === 'rent'
						? 'Places for rent'
						: 'Places for sale'}
				</p>
			</header>
			{loading ? (
				<Spinner />
			) : listings && listings.length > 0 ? (
				<>
					<main>
						<ul className='categoryListings'>
							{listings.map((listing) => (
								<h3> {listing.data.name}</h3>
							))}
						</ul>
					</main>
				</>
			) : (
				<p>No Listings for {params.categoryName}</p>
			)}
		</div>
	)
}

export default Category