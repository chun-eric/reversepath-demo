"use client";

export function StorylineModule({
  moduleId,
  title,
}: {
  moduleId: string;
  title: string;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <iframe
        src={`/public/education-modules/${moduleId}/story.html`}
        width="100%"
        height="600px"
        title={title}
      />
    </div>
  );
}
