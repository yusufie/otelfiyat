import Layout from "@/components/Layout/Layout"
import Image from "next/image"

function AboutPage() {
  return (
    <Layout>
          <section className="container flex flex-col md:flex-row gap-4 mx-auto mt-32">

            <div className={ `sm:basis-3/2 md:basis-1/2` }>
              <Image className="" src="/images/hotel-customer.jpg" alt="customer" width={600} height={557} />
            </div>

            <div className={ `mr-auto md:mx-auto` }>

                <h4 className={ `text-2xl font-medium` }>ABOUT US <span className={ `border-b-2 inline-block border-orange-600 h-1 w-24` }></span></h4>

                <h1 className={ `text-4xl my-5 leading-[45px] font-semibold` }>The Best holidays
                    <br />
                    start here!
                </h1>

                <p className={ `text-gray-500` }>No one rejects,dislikes or avoids pleasure itself,
                    <br />
                    because its pleasure, but because those who
                    <br />
                    do not know how to persue
                </p>

                <div className={ `my-5` }>
                <button
                  className='bg-indigo-900 inline-block text-center w-40 py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
                >
                    Read More
                  </button>
                </div>

            </div>
        </section>
    </Layout>
  )
}

export default AboutPage