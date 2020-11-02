import CTAButton from "@components/CTAButton"
import Nav from '@components/nav'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-center">
          <CTAButton/>
        </h1>
      </div>
    </div>
  )
}
