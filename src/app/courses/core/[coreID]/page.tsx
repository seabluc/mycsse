/* 
 * Dynamic Segment, created by wrapping folder's name in square brackets.
 * Allows next.js to map this file to any route with URL /courses/core/coreID
 * 
 * TypeScript type annotation:
 * { params: { coreID: string } }
 * Declares params object with a key called coreID with type string.
 * We use params (provided by Next.js) to access the coreID's route parameter
 * 
*/
export default function Core({
  params,
}: {
  params: { coreID: string };
}) {
  if (params.coreID === "342") {
    return (
      <>
      <h1>Core Course: CSS {params.coreID} w/ Robert Dimpsey was brutal</h1>
      </>
    )
  }
  return (
    <>
      <h1>Core Courses: {params.coreID}</h1> 
      {/* localhost:3000/courses/core/ye -> h1 prints 'Core Courses: ye' */}
    </>
  )
}