
import './SectionHeading.css'

function SectionHeading({
    title,
    subtitle,
    size,
}: {
    title: React.ReactNode
    subtitle: string
    size?: 'sm' | 'lg'
}) {
    return (
        <div className="section-heading">
            <p
                className="section-heading__subtitle"
            >
                {subtitle}
            </p>
            <h2 className={`section-heading__title ${
                    size === 'lg' ? 'section-heading__title--lg' : ''
                }`}>{title}</h2>
        </div>
    )
}

export default SectionHeading