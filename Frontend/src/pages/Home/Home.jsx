import Hero from "../../components/Home/Hero"
import StaticFeatures from "../../components/Home/StaticFeatures"
import Sidebar from "../../components/Layouts/Sidebar/Sidebar"
import Navbar from "../../components/Layouts/Navbar/Navbar"
import Footer from "../../components/Layouts/Footer/Footer"

function Home() {
    return (<>

        <Navbar />
        <Hero />
        <StaticFeatures />
        <Footer />

    </>)

}

export default Home