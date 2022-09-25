import React from 'react'
import Layout from '../components/Layout';
import Seo from "../components/Seo";
import usesData from '../data/usesData'
import { StaticImage } from "gatsby-plugin-image"


  const Divider = (props) => {
    return (
        <div className="relative mt-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <h2 className="bg-gray-100 pr-3 text-xl font-bold text-gray-900">{props.title}</h2>
      </div>
    </div>
    )
  }

export default function UsesPage() {

    const renderSections = (usesData) => { 
       return (usesData.map((data) => {
                return (<section className="pt-8" key={data.section}>
               <Divider title={data.section}/>
               <ul className="list-disc ml-10">
                {data.items.map(item => {
                        return (
                        <li className="mt-4" key={item.name}>
                            <a className="hover:underline decoration-wavy decoration-[#74c7d5]"
                               target="_blank" rel="noopener noreferrer"
                               href={item.url}>
                                {item.name}
                               </a>
                               {item.description && <span className="text-slate-600"> - {item.description}</span>}
                        </li>
                        )
                })}
                </ul> 
            </section> 
            )})
        ) 
    }


  return (
    <Layout>
      <Seo title="Alyssa Holland | Uses" siteUrl="https://alyssaholland.com/uses"
           description="The Apps, Products and Services that Alyssa Holland uses." 
      />
      <main className="pt-8 pb-16 bg-gray-100">
        <h1 className="sr-only">Uses</h1>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center mb-4">
            <StaticImage className="rounded-sm" src="../images/desk-corner.jpg" alt="desk" placeholder="blurred" loading="eager" height={500} width={1000} />
            </div>
          <p className="text-gray-700 pl-4 border-l-4 border-gray-400">Last Updated: September 24, 2022 </p>
          <p className="italic text-sm font-semibold mt-4">*Note: A small subset of the links provided are affiliate links*</p>
          {renderSections(usesData)}
          </div>
        </div>
      </main>
   </Layout>
  )
}
