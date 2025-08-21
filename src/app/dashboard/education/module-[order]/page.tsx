// import { StorylineModule } from "@/app/components/education/StorylineModule";

// Add this export to disable static generation
export const dynamic = "force-dynamic";

export default function Module1Page({ params }: { params: { order: string } }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Understanding Your Diabetes Journey
      </h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="/education-modules/module-1/story"
          width="100%"
          height="600"
          frameBorder="0"
          title="Understanding Your Diabetes Journey"
          className="w-full h-[600px]"
        />
      </div>
    </div>
  );
}
