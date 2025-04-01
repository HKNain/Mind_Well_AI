import { useState } from "react";
import AssessmentCard from "@/components/AssessmentCard";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const assessmentTypes = [
  {
    id: "sleep",
    title: "Sleep Tracker",
    description: "Track your sleep patterns, quality, and duration for better rest",
    icon: "fas fa-bed",
    iconBgClass: "bg-primary-light/20",
    iconClass: "text-primary",
  },
  {
    id: "diet",
    title: "Diet & Nutrition",
    description: "Log your meals and track nutritional impact on mental health",
    icon: "fas fa-utensils",
    iconBgClass: "bg-secondary-light/20",
    iconClass: "text-secondary",
  },
  {
    id: "mood",
    title: "Mood & Symptoms",
    description: "Monitor your emotional state and mental health symptoms",
    icon: "fas fa-smile",
    iconBgClass: "bg-accent-light/20",
    iconClass: "text-accent",
  },
  {
    id: "activity",
    title: "Physical Activity",
    description: "Track exercise and its impact on your mental wellbeing",
    icon: "fas fa-running",
    iconBgClass: "bg-neutral-300",
    iconClass: "text-neutral-500",
  },
];

const Assessment = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>("sleep");

  const handleAssessmentSelect = (id: string) => {
    setSelectedAssessment(id);
  };

  const handleBeginAssessment = () => {
    if (!selectedAssessment) {
      toast({
        title: "Please select an assessment",
        description: "You need to select an assessment type before proceeding.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Assessment starting",
      description: `You've selected the ${
        assessmentTypes.find((a) => a.id === selectedAssessment)?.title
      } assessment.`,
    });

    // In a real application, you would navigate to the specific assessment
    // or load the assessment questions here
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-500 mb-4">Daily Health Tracker & AI Insights</h2>
            <p className="text-neutral-400 mb-4">
              Track your mental well-being by logging sleep, diet, symptoms, and activity. Our AI analyzes trends, predicts potential risks, and provides actionable recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
                <i className="fas fa-bed text-accent mr-2"></i>
                <span className="text-sm text-neutral-500">Sleep Tracking</span>
              </div>
              <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
                <i className="fas fa-utensils text-accent mr-2"></i>
                <span className="text-sm text-neutral-500">Diet Logging</span>
              </div>
              <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
                <i className="fas fa-heartbeat text-accent mr-2"></i>
                <span className="text-sm text-neutral-500">Symptom Monitoring</span>
              </div>
              <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
                <i className="fas fa-chart-line text-accent mr-2"></i>
                <span className="text-sm text-neutral-500">Trend Analysis</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-100 rounded-lg p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-neutral-500 mb-2">About Health Tracking</h3>
              <p className="text-neutral-400 mb-4">
                Our AI-powered health tracking system helps you monitor key aspects of your daily life that impact mental health. Log data regularly for more accurate insights and personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4 mb-2">
                <div className="flex items-center text-sm text-neutral-400">
                  <i className="fas fa-robot mr-2 text-primary"></i> AI Pattern Analysis
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <i className="fas fa-shield-alt mr-2 text-primary"></i> Private & Confidential
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <i className="fas fa-user-md mr-2 text-primary"></i> Treatment Suggestions
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-6 mb-6">
              <h4 className="font-medium text-neutral-500 mb-3">Select what you'd like to track today:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {assessmentTypes.map((assessment) => (
                  <AssessmentCard
                    key={assessment.id}
                    title={assessment.title}
                    description={assessment.description}
                    icon={assessment.icon}
                    iconBgClass={assessment.iconBgClass}
                    iconClass={assessment.iconClass}
                    isSelected={selectedAssessment === assessment.id}
                    onClick={() => handleAssessmentSelect(assessment.id)}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={handleBeginAssessment}
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Start Tracking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;
