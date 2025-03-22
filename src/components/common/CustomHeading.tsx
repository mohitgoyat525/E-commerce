import React from 'react'

interface CustomHeadingProps {
    headingText: string;
    myClass: string
}
const CustomHeading :React.FC<CustomHeadingProps> =({ headingText, myClass }) => {
    return (
      <h2
        className={`${myClass} text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold font-intergal-cf text-center leading-[100%]`}>
        {headingText}
      </h2>
    );
};

export default CustomHeading