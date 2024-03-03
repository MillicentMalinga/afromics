import React from 'react'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const research = [
    {
        title: "Genome-wide association study (GWAS) on Alzheimer's disease",
        short_description: "Identify genetic variants associated with Alzheimer's disease risk.",
        long_description: "Perform a GWAS using large-scale genomic data to identify single nucleotide polymorphisms (SNPs) associated with Alzheimer's disease susceptibility. Investigate potential causal variants and pathways.",
        deadline: "December 31, 2023",
        num_scientists: 3,
        dataset_link: "[1](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000572.v7.p4)"
    },
    {
        title: "Transcriptome analysis of breast cancer subtypes",
        short_description: "Characterize gene expression profiles in different breast cancer subtypes.",
        long_description: "Analyze RNA-seq data from breast cancer patients to identify differentially expressed genes across subtypes (e.g., luminal, HER2-enriched, basal-like). Explore potential therapeutic targets and biomarkers.",
        deadline: "March 15, 2024",
        num_scientists: 2,
        dataset_link: "[2](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE45827)"
    },
    {
        title: "Metagenomic analysis of gut microbiota in Crohn's disease",
        short_description: "Investigate microbial composition and functional pathways in Crohn's disease patients.",
        long_description: "Analyze metagenomic sequencing data from fecal samples of Crohn's disease patients and healthy controls. Identify taxonomic shifts, functional pathways, and potential dysbiosis associated with disease.",
        deadline: "June 30, 2024",
        num_scientists: 4,
        dataset_link: "[3](https://www.ebi.ac.uk/metagenomics/studies/MGYS00002084)"
    }
]

function TrendingOrgs() {
  return (
    <div className='flex flex-col py-10 bg-blue-gray-50 place-content-center'>
    <div className="font-body-plex text-left text-blue-gray-900 w-4/5 mx-auto">
        <p className="text-sm font-bold">
            Trending Projects
        </p>
        <p className="font-light">
            Check out these latest projects that other scientists are collaborating on. 
        </p>
        </div>  
        <div className="flex flex-col my-10 gap-8">
            {research.map((job, index) => (
                <JobCard key={index} title={job.title} short_description={job.short_description} long_description={job.long_description} deadline={job.deadline} num_scientists={job.num_scientists} dataset_link={job.dataset_link} />
            ))}

          <div className="mx-auto w-4/5 text-right mt-8 ">
                <Link to="/projects" className=" text-blue-gray-900 font-semibold font-body-plex text-md w-max  py-4 px-6 place-self-end">
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
                </div>
           
</div>
   </div>
  )
}

export default TrendingOrgs