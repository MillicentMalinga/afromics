
function JobCard(props) {
    return (
      <div className="flex justify-between bg-gray-100 font-body-plex text-blue-gray-800 flex-col divide-y divide-blue-gray-200 gap-8 w-4/5 p-4  mx-auto  rounded-lg shadow-lg">
        
        <div className="flex flex-col my-2 ">
          <p className="font-bold">
            {props.title}
          </p>
          <p className="text-sm">
            {props.short_description}
            </p>

        </div>

        <div className="flex flex-col my-2 gap-2">
          <p className="font-normal">
            {props.long_description}
          </p>
          <p className="font-bold text-xs place-self-end text-teal-900 bg-teal-200 rounded-xl px-2 py-2 w-max">
            Apply by: {props.deadline}
          </p>
    <div className="flex flex-row gap-4 my-2 justify-between">
      <p className="font-body-plex text-xs font-bold">
        {props.country}
      </p>
      <p className="font-body-plex text-xs">
        Work Mode: {props.delivery}
      </p>
      <p className="font-body-plex text-xs border-b-[1px] border-b-teal-400">
        Contact: {props.leadResearcher} on {props.contact}
      </p>

    </div>
        </div>
    
      </div>
    );
  }

export default JobCard;