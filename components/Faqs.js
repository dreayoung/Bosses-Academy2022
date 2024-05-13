import { Timeline } from 'flowbite-react';
import { AiFillQuestionCircle } from 'react-icons/ai';

const Faqs = () => {
  const info = [
    {
      title: 'How long is this course?',
      text: ' This course will be 6 weeks long',
    },
    {
      title: 'Do I have life-time access to this course?',
      text:
        'Yes, you are able to access this course for a life-time. Also, I am aware individuals have hectic schedules so you are able to review the modules 24/7',
    },
    {
      title: 'Is this course in person or virtual?',
      text: ' This course is provided virtually via a teachable account',
    },
    {
      title: 'Do you provide 1 on 1 mentorship?',
      text:
        '1 on 1 mentorship is provided when requested. In addition, all information will be provided during a consultation',
    },
  ];

  return (
    <div className="relative flex justify-center px-8 md:px-20 mb-20">
      <div className="text-4xl lob absolute -top-20 text-semiblack">Faqs</div>
      <Timeline>
        {info.map(({ title, text }) => {
          return (
            <Timeline.Item key={title}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title className="text-goldie lob text-[1.5em]">
                  {title}
                </Timeline.Title>
                <Timeline.Body className="text-semiblack rob text-[1.2em]">
                  {text}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Faqs;
