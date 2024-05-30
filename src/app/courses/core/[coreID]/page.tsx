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
  return (
    <>
      <h1>Core Courses: {params.coreID}</h1> 
      {/* localhost:3000/courses/core/ye -> h1 prints 'Core Courses: ye' */}
    </>
  )
}