interface propsType {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<propsType>  = ({title, icon}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gray-200 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-accent font-medium text-xl">{title}</h3>
      </div>
    </div>
  )
}

export default FeatureCard