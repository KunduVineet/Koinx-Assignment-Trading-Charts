import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      imgSrc: './Vineet-img.jpg',
      description: 'Vineet is a dedicated team member with expertise in Project Management and a Passion for Driving Results. Worked in Frontend and Backend Technologies.'
    },
    {
      imgSrc: './m1.svg',
      description: 'John is a skilled developer with a knack for problem-solving and a commitment to delivering high-quality code.'
    },
    {
      imgSrc: './m2.svg',
      description: 'Jane is a creative designer who excels in creating visually appealing and user-friendly designs.'
    }
  ];

return (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Team</h1>
    <div className="mb-4 text-lg">
      In a corporate environment, a team is a diverse group of professionals who collaborate to achieve business objectives and drive organizational growth. Effective teamwork in the corporate world relies on clear communication, mutual respect, and a shared vision for success.
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-gray-100">
          <img src={member.imgSrc} alt="Team Member" className="w-32 h-32 rounded-full mb-4 object-cover" />
          <div className="text-center">{member.description}</div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Team;