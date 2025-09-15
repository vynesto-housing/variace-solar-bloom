import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Users, Award, ArrowRight, Play } from 'lucide-react';
import Layout from '@/components/Layout';

interface Course {
  id: number;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  free: boolean;
  image: string;
  tags: string[];
  progress?: number;
}

const Learn = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Mock courses data - in real app, this would come from your backend API
  useEffect(() => {
    const mockCourses: Course[] = [
      {
        id: 1,
        title: 'Solar Energy Fundamentals',
        description: 'Learn the basics of solar energy, how photovoltaic systems work, and the benefits of renewable energy.',
        level: 'beginner',
        duration: '2 hours',
        lessons: 8,
        students: 1247,
        rating: 4.8,
        price: 0,
        free: true,
        image: '/placeholder.svg',
        tags: ['Fundamentals', 'Renewable Energy', 'Beginner'],
        progress: 0
      },
      {
        id: 2,
        title: 'Solar Panel Installation Guide',
        description: 'Complete step-by-step guide to installing solar panels safely and efficiently.',
        level: 'intermediate',
        duration: '4 hours',
        lessons: 12,
        students: 856,
        rating: 4.9,
        price: 99,
        free: false,
        image: '/placeholder.svg',
        tags: ['Installation', 'Hands-on', 'Safety'],
        progress: 35
      },
      {
        id: 3,
        title: 'Advanced Solar System Design',
        description: 'Master the art of designing efficient solar systems for residential and commercial applications.',
        level: 'advanced',
        duration: '6 hours',
        lessons: 15,
        students: 423,
        rating: 4.7,
        price: 199,
        free: false,
        image: '/placeholder.svg',
        tags: ['Design', 'Engineering', 'Commercial'],
        progress: 0
      },
      {
        id: 4,
        title: 'Solar Energy Business Fundamentals',
        description: 'Learn how to start and grow a successful solar energy business.',
        level: 'intermediate',
        duration: '3 hours',
        lessons: 10,
        students: 634,
        rating: 4.6,
        price: 149,
        free: false,
        image: '/placeholder.svg',
        tags: ['Business', 'Entrepreneurship', 'Sales'],
        progress: 0
      },
      {
        id: 5,
        title: 'Solar Maintenance and Troubleshooting',
        description: 'Essential skills for maintaining solar systems and diagnosing common issues.',
        level: 'intermediate',
        duration: '3.5 hours',
        lessons: 11,
        students: 512,
        rating: 4.8,
        price: 79,
        free: false,
        image: '/placeholder.svg',
        tags: ['Maintenance', 'Troubleshooting', 'Technical'],
        progress: 60
      },
      {
        id: 6,
        title: 'Understanding Solar Economics',
        description: 'Dive deep into the financial aspects of solar energy including ROI, financing, and incentives.',
        level: 'beginner',
        duration: '2.5 hours',
        lessons: 9,
        students: 789,
        rating: 4.5,
        price: 0,
        free: true,
        image: '/placeholder.svg',
        tags: ['Economics', 'Finance', 'ROI'],
        progress: 0
      }
    ];
    setCourses(mockCourses);
  }, []);

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const filteredCourses = selectedLevel === 'all' 
    ? courses 
    : courses.filter(course => course.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-solar-green text-white';
      case 'intermediate': return 'bg-solar-yellow text-solar-blue';
      case 'advanced': return 'bg-solar-blue text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Solar Learning Center</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Master solar energy technology with our comprehensive courses and expert-led training programs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-solar-blue mb-2">50+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-solar-blue mb-2">10k+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-solar-blue mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-solar-blue mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Filter */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={selectedLevel === level.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level.id)}
                className={selectedLevel === level.id ? 
                  "bg-solar-blue hover:bg-solar-blue/90 whitespace-nowrap" : 
                  "whitespace-nowrap"
                }
              >
                {level.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover bg-gradient-card"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    {course.free && (
                      <Badge className="bg-solar-green text-white">
                        Free
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Play className="h-3 w-3 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {course.progress !== undefined && course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-solar-blue font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-solar-blue">
                      {course.free ? 'Free' : `$${course.price}`}
                    </div>
                    <Link to={`/learn/${course.id}`}>
                      <Button 
                        className={course.progress !== undefined && course.progress > 0 
                          ? "bg-solar-green hover:bg-solar-green/90" 
                          : "bg-solar-blue hover:bg-solar-blue/90"
                        }
                      >
                        {course.progress !== undefined && course.progress > 0 ? 'Continue' : 'Start Course'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 bg-solar-yellow-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-solar-blue mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-solar-blue/80 mb-6 max-w-2xl mx-auto">
            Take our quick assessment to get a personalized learning path based on your goals and experience level.
          </p>
          <Button 
            size="lg" 
            className="bg-solar-blue hover:bg-solar-blue/90 text-white font-semibold"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Get Learning Path
          </Button>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our courses are created and taught by experienced professionals with decades of combined experience in solar energy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Solar Engineer', experience: '15+ years' },
              { name: 'Mike Rodriguez', role: 'Installation Expert', experience: '12+ years' },
              { name: 'Emily Park', role: 'Business Consultant', experience: '10+ years' }
            ].map((instructor, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-solar rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-solar-blue">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{instructor.name}</h3>
                <p className="text-muted-foreground">{instructor.role}</p>
                <p className="text-sm text-solar-blue">{instructor.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;