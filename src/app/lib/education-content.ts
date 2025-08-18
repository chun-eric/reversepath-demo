// Education module content for ReversePath diabetes remission platform

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface EducationModule {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  order: number;
  content: {
    sections: {
      title: string;
      content: string;
      type: "text" | "video" | "interactive";
    }[];
    quiz: QuizQuestion[];
  };
  learningObjectives: string[];
}

export const educationModules: EducationModule[] = [
  {
    id: "diabetes-remission-basics",
    title: "Understanding Diabetes Remission",
    description:
      "Learn the science behind Type 2 diabetes reversal and what remission means for your health.",
    duration: 15,
    order: 1,
    learningObjectives: [
      "Understand what diabetes remission means",
      "Learn how remission is achieved through weight loss",
      "Identify the timeline for diabetes reversal",
      "Recognize the importance of lifestyle changes",
    ],
    content: {
      sections: [
        {
          title: "What is Diabetes Remission?",
          type: "text",
          content: `Diabetes remission occurs when your blood sugar levels return to normal ranges without the need for diabetes medications. This doesn't mean diabetes is "cured" forever, but rather that your body has regained the ability to control blood sugar naturally.

**Key markers of remission:**
- HbA1c below 6.5% (48 mmol/mol)
- Sustained for at least 6 months
- Without diabetes medications
- Normal fasting glucose levels

Recent research shows that Type 2 diabetes can be reversed in many people through sustained weight loss, particularly in the first 6 years after diagnosis.`,
        },
        {
          title: "The Science Behind Reversal",
          type: "text",
          content: `Type 2 diabetes develops when fat accumulates in the pancreas and liver, disrupting normal insulin production and glucose processing. When this fat is removed through weight loss:

**What happens in your body:**
1. **Pancreas recovery**: Beta cells begin producing insulin normally again
2. **Liver function**: Improves glucose storage and release
3. **Muscle sensitivity**: Cells become more responsive to insulin
4. **Fat distribution**: Reduces harmful visceral fat around organs

Studies show that losing 10-15kg can lead to remission in 46-86% of people with Type 2 diabetes.`,
        },
        {
          title: "Your Remission Timeline",
          type: "interactive",
          content: `Understanding the typical timeline helps set realistic expectations:

**Weeks 1-4: Initial Changes**
- Blood glucose begins to improve
- Weight loss starts (typically 2-4kg)
- Energy levels may fluctuate

**Weeks 5-12: Significant Progress**
- Continued weight loss (target: 10-15kg total)
- Blood glucose stabilizes in normal ranges
- Improved sleep and energy

**Months 3-6: Stabilization**
- Gradual food reintroduction begins
- Blood glucose monitoring continues
- Lifestyle habits become established

**6+ Months: Assessment**
- HbA1c testing to confirm remission
- Long-term maintenance planning
- Ongoing support and monitoring`,
        },
      ],
      quiz: [
        {
          id: "q1",
          question: "What HbA1c level indicates diabetes remission?",
          options: [
            "Below 7.0% (53 mmol/mol)",
            "Below 6.5% (48 mmol/mol)",
            "Below 6.0% (42 mmol/mol)",
            "Below 5.7% (39 mmol/mol)",
          ],
          correctAnswer: 1,
          explanation:
            "Diabetes remission is defined as HbA1c below 6.5% (48 mmol/mol) sustained for at least 6 months without diabetes medications.",
        },
        {
          id: "q2",
          question: "How much weight loss is typically needed for remission?",
          options: ["5-8kg", "10-15kg", "20-25kg", "Any amount of weight loss"],
          correctAnswer: 1,
          explanation:
            "Research shows that losing 10-15kg is typically needed to achieve diabetes remission, though individual needs may vary.",
        },
        {
          id: "q3",
          question: "Where does fat accumulation cause Type 2 diabetes?",
          options: [
            "Only in the pancreas",
            "Only in the liver",
            "In the pancreas and liver",
            "Only under the skin",
          ],
          correctAnswer: 2,
          explanation:
            "Type 2 diabetes develops when excess fat accumulates in both the pancreas and liver, disrupting their normal functions.",
        },
      ],
    },
  },
  {
    id: "low-energy-diet",
    title: "Mastering the Low-Energy Diet",
    description:
      "Learn how to follow an 800-calorie diet safely and effectively for diabetes remission.",
    duration: 20,
    order: 2,
    learningObjectives: [
      "Understand the 800-calorie diet principles",
      "Learn meal planning strategies",
      "Identify nutritious low-calorie foods",
      "Master portion control techniques",
    ],
    content: {
      sections: [
        {
          title: "Low-Energy Diet Basics",
          type: "text",
          content: `The low-energy diet (LED) is a carefully structured 800-850 calorie daily eating plan designed to achieve rapid, safe weight loss for diabetes remission.

**Why 800 calories?**
- Creates significant calorie deficit for fat loss
- Low enough to target pancreatic and liver fat
- High enough to maintain essential nutrition
- Sustainable for 12-20 week periods

**Diet composition:**
- **Protein**: 40-50g daily (prevents muscle loss)
- **Carbohydrates**: 40-50g daily (maintains brain function)
- **Fat**: 20-30g daily (essential fatty acids)
- **Fiber**: 25g+ daily (digestive health)

This isn't a crash diet - it's a medically-supervised approach used in diabetes research worldwide.`,
        },
        {
          title: "Daily Meal Structure",
          type: "interactive",
          content: `**Breakfast (200 calories):**
- 1 protein portion (eggs, lean meat, or protein shake)
- 1 vegetable serving
- Small portion of complex carbs

**Lunch (250 calories):**
- Large salad with lean protein
- Variety of colorful vegetables
- Light dressing or olive oil

**Dinner (300 calories):**
- Lean protein (fish, chicken, tofu)
- Large portion of non-starchy vegetables
- Small serving of complex carbs

**Snacks (50 calories):**
- Raw vegetables
- Small piece of fruit
- Herbal tea or water

**Sample Day Menu:**
- Breakfast: 2-egg omelet with spinach and tomatoes
- Lunch: Large chicken salad with mixed vegetables
- Dinner: Grilled salmon with broccoli and quinoa
- Snack: Cucumber slices with mint`,
        },
        {
          title: "Food Choices and Portions",
          type: "interactive",
          content: `**Unlimited foods (very low calorie):**
- Leafy greens (spinach, lettuce, kale)
- Cucumber, celery, bell peppers
- Broccoli, cauliflower, zucchini
- Herbs and spices
- Herbal teas, water

**Measured portions:**
- **Protein**: Palm-sized portion (100-150g)
- **Complex carbs**: 1/4 cup cooked (quinoa, brown rice)
- **Healthy fats**: 1 teaspoon olive oil
- **Fruit**: 1 small piece or 1/2 cup berries

**Foods to avoid completely:**
- Processed foods and snacks
- Sugary drinks and alcohol
- White bread, pasta, rice
- High-fat dairy products
- Nuts and seeds (too calorie-dense)

**Portion control tips:**
- Use smaller plates and bowls
- Measure foods initially to learn portions
- Eat slowly and mindfully
- Drink water before meals`,
        },
      ],
      quiz: [
        {
          id: "q1",
          question:
            "How many calories should you consume daily on the low-energy diet?",
          options: [
            "600-700 calories",
            "800-850 calories",
            "1000-1100 calories",
            "1200-1300 calories",
          ],
          correctAnswer: 1,
          explanation:
            "The low-energy diet for diabetes remission involves consuming 800-850 calories daily under medical supervision.",
        },
        {
          id: "q2",
          question: "Which foods can you eat unlimited amounts of?",
          options: [
            "All vegetables",
            "Fruits and vegetables",
            "Leafy greens and low-calorie vegetables",
            "Lean proteins",
          ],
          correctAnswer: 2,
          explanation:
            "You can eat unlimited amounts of very low-calorie vegetables like leafy greens, cucumber, celery, and broccoli.",
        },
        {
          id: "q3",
          question: "What is the recommended protein intake per day?",
          options: ["20-30g", "40-50g", "60-70g", "80-90g"],
          correctAnswer: 1,
          explanation:
            "The low-energy diet includes 40-50g of protein daily to prevent muscle loss while promoting fat loss.",
        },
      ],
    },
  },
  {
    id: "monitoring-progress",
    title: "Monitoring Your Progress",
    description:
      "Learn how to track your health metrics and recognize signs of successful diabetes remission.",
    duration: 18,
    order: 3,
    learningObjectives: [
      "Master blood glucose monitoring techniques",
      "Understand ketone testing and significance",
      "Learn to interpret health trends",
      "Recognize warning signs requiring medical attention",
    ],
    content: {
      sections: [
        {
          title: "Blood Glucose Monitoring",
          type: "text",
          content: `Regular blood glucose monitoring is essential for tracking your progress toward remission and ensuring your safety during the low-energy diet phase.

**When to test:**
- **Fasting**: First thing in the morning
- **Pre-meal**: 30 minutes before eating
- **Post-meal**: 2 hours after eating
- **Before bed**: To check overnight patterns
- **When feeling unwell**: If experiencing symptoms

**Target ranges during remission journey:**
- **Fasting glucose**: 70-100 mg/dL (3.9-5.6 mmol/L)
- **Pre-meal**: 70-130 mg/dL (3.9-7.2 mmol/L)
- **Post-meal**: Under 180 mg/dL (10.0 mmol/L)
- **Bedtime**: 100-140 mg/dL (5.6-7.8 mmol/L)

**What to record:**
- Glucose reading and time
- What you ate and when
- Physical activity
- Stress levels or illness
- Medication timing (if applicable)`,
        },
        {
          title: "Understanding Ketones",
          type: "text",
          content: `During the low-energy diet, your body will begin burning fat for fuel, producing ketones. Light ketosis is normal and beneficial, but monitoring prevents dangerous levels.

**Ketone testing methods:**
- **Urine strips**: Convenient, less accurate
- **Blood ketone meter**: More accurate, recommended
- **Breath ketones**: Emerging technology

**Ketone level interpretation:**
- **0.5-1.5 mmol/L**: Light ketosis (good for fat burning)
- **1.5-3.0 mmol/L**: Moderate ketosis (monitor closely)
- **Above 3.0 mmol/L**: High ketosis (contact healthcare team)

**Benefits of light ketosis:**
- Indicates fat burning is occurring
- May improve energy and mental clarity
- Helps suppress appetite naturally
- Associated with improved insulin sensitivity

**When to test ketones:**
- Weekly during the low-energy diet phase
- If feeling unwell or nauseated
- If blood glucose is unexpectedly high
- Before and after exercise sessions`,
        },
        {
          title: "Tracking Your Success",
          type: "interactive",
          content: `**Key metrics to monitor:**

**Weekly measurements:**
- Weight (same time, same scale, same clothes)
- Waist circumference (at navel level)
- Blood pressure (if available)
- Energy levels (1-10 scale)
- Sleep quality (1-10 scale)

**Monthly assessments:**
- Progress photos (same pose, lighting)
- Clothing fit changes
- Medication adjustments with doctor
- Exercise capacity improvements

**Quarterly testing:**
- HbA1c blood test
- Lipid panel (cholesterol)
- Liver function tests
- Kidney function tests

**Signs of successful remission:**
✅ Consistent normal glucose readings
✅ Steady weight loss (1-2kg per week)
✅ Improved energy and sleep
✅ Reduced hunger and cravings
✅ Better mood and mental clarity
✅ Decreased medication needs (with doctor supervision)

**Warning signs to report immediately:**
⚠️ Persistent nausea or vomiting
⚠️ Severe fatigue or weakness
⚠️ Rapid heartbeat or dizziness
⚠️ Blood glucose consistently above 300 mg/dL
⚠️ Ketones above 3.0 mmol/L
⚠️ Signs of dehydration`,
        },
      ],
      quiz: [
        {
          id: "q1",
          question:
            "What is the target fasting glucose range during remission?",
          options: [
            "80-120 mg/dL",
            "70-100 mg/dL",
            "90-130 mg/dL",
            "100-140 mg/dL",
          ],
          correctAnswer: 1,
          explanation:
            "The target fasting glucose range is 70-100 mg/dL (3.9-5.6 mmol/L), which is considered normal for people without diabetes.",
        },
        {
          id: "q2",
          question: "What ketone level indicates beneficial fat burning?",
          options: [
            "0.1-0.5 mmol/L",
            "0.5-1.5 mmol/L",
            "1.5-3.0 mmol/L",
            "Above 3.0 mmol/L",
          ],
          correctAnswer: 1,
          explanation:
            "Ketone levels of 0.5-1.5 mmol/L indicate light ketosis, which is beneficial for fat burning during the low-energy diet.",
        },
        {
          id: "q3",
          question: "How often should you weigh yourself during the program?",
          options: ["Daily", "Weekly", "Monthly", "Only when you feel lighter"],
          correctAnswer: 1,
          explanation:
            "Weekly weighing is recommended - consistent timing, same scale, and same clothing conditions for accurate progress tracking.",
        },
      ],
    },
  },
];

// Helper functions for working with education content
export function getModuleById(id: string): EducationModule | undefined {
  return educationModules.find((module) => module.id === id);
}

export function getModulesByOrder(): EducationModule[] {
  return [...educationModules].sort((a, b) => a.order - b.order);
}

export function calculateModuleProgress(completedModules: string[]): number {
  return Math.round((completedModules.length / educationModules.length) * 100);
}

export function getNextModule(
  currentModuleId: string
): EducationModule | undefined {
  const currentModule = getModuleById(currentModuleId);
  if (!currentModule) return undefined;

  return educationModules.find(
    (module) => module.order === currentModule.order + 1
  );
}
