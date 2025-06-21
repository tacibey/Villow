import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import Layout from "../Cards";
import Footer from "../Footer";
import SearchBar from "../SearchBar/SearchBar";

import { fetchListings, clearAllListings } from "../../store/listingsReducer";

import 'react-loading-skeleton/dist/skeleton.css'
import "./SplashPage.scss";

const SplashPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchListings());

		return () => {
			dispatch(clearAllListings());
		};
	}, [dispatch]);

	return (
		<>
      <div className="splash-page-container">
        <div className="search_container">
            <h1>ArsaMax: Yatırımın Geleceği</h1>
            <p>Doğru arsayı bulun, geleceğinize yatırım yapın.</p>
            <SearchBar />
        </div>
      </div>
			<Layout />
			<ListingsCarousel
				header={"Öne Çıkan Arsa İlanları"}
				paragraph={"Yatırımcıların en çok incelediği arsalar"}
			/>
			<Footer />
		</>
	);
};

export default SplashPage;
