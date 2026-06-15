/**
 * Shared eyebrow + title + optional lede block used by every major section.
 * Keeps vertical rhythm and type hierarchy consistent across the page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div
      className={`flex flex-col ${alignment} ${className}`}
      data-reveal-stagger
    >
      {eyebrow && (
        <span className="reveal mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.32em] text-accent">
          <span className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="reveal max-w-3xl text-balance text-4xl text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lede && (
        <p className="reveal mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {lede}
        </p>
      )}
    </div>
  )
}
