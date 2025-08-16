import React from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Terminal, CheckSquare, BrainCircuit, Waves } from 'lucide-react';

type SkillIconProps = {
  skill: string;
  className?: string;
};

// Simplified icon map using inline SVGs for brand icons
const iconMap: Record<string, React.ReactNode> = {
  // Languages & Scripting
  python: (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>Python</title>
      <path d="M11.532 24c-2.484 0-4.524-.804-6.12-2.424C3.84 20.004 3 17.988 3 15.492V8.724h4.44v6.6c0 1.536.504 2.82 1.512 3.852 1.008 1.032 2.292 1.56 3.852 1.56s2.844-.528 3.852-1.56c1.008-1.032 1.512-2.316 1.512-3.852v-6.6H21v6.768c0 2.496-.84 4.512-2.52 6.048-1.68 1.536-3.72 2.304-6.12 2.304h.168zm.024-11.4c-2.484 0-4.524-.804-6.12-2.424C3.864 8.604 3.024 6.588 3.024 4.092v-1.2h4.44v1.032c0 1.536.504 2.82 1.512 3.852 1.008 1.032 2.292 1.56 3.852 1.56s2.844-.528 3.852-1.56c1.008-1.032 1.512-2.316 1.512-3.852V2.892H21v1.2c0 2.496-.84 4.512-2.52 6.048-1.68 1.536-3.72 2.304-6.12 2.304h.168Z" />
    </svg>
  ),
  c: (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>C</title>
      <path d="M12.78,16.205c-1.8,1.26-3.72,1.89-5.76,1.89-2.61,0-4.83-0.855-6.66-2.565C-1.455,13.845-2.4,11.565-2.4,8.88c0-2.67,0.945-4.95,2.835-6.66C2.325,0.525,4.545-0.285,7.02-0.285c1.98,0,3.84,0.6,5.58,1.8,1.755,1.2,2.865,2.9,3.33,5.1l-4.23,1.02c-0.255-0.96-0.765-1.74-1.53-2.34-0.765-0.6-1.74-0.9-2.94-0.9-1.23,0-2.265,0.435-3.105,1.305-0.84,0.855-1.26,1.965-1.26,3.315s0.42,2.46,1.26,3.315c0.84,0.87,1.875,1.305,3.105,1.305,1.2,0,2.175-0.3,2.94-0.9,0.765-0.6,1.275-1.38,1.53-2.34l4.23,1.02c-0.45,2.205-1.56,3.915-3.33,5.13Z" />
    </svg>
  ),
  'c++': (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>C++</title>
      <path d="M12.78,16.205c-1.8,1.26-3.72,1.89-5.76,1.89-2.61,0-4.83-0.855-6.66-2.565C-1.455,13.845-2.4,11.565-2.4,8.88c0-2.67,0.945-4.95,2.835-6.66C2.325,0.525,4.545-0.285,7.02-0.285c1.98,0,3.84,0.6,5.58,1.8,1.755,1.2,2.865,2.9,3.33,5.1l-4.23,1.02c-0.255-0.96-0.765-1.74-1.53-2.34-0.765-0.6-1.74-0.9-2.94-0.9-1.23,0-2.265,0.435-3.105,1.305-0.84,0.855-1.26,1.965-1.26,3.315s0.42,2.46,1.26,3.315c0.84,0.87,1.875,1.305,3.105,1.305,1.2,0,2.175-0.3,2.94-0.9,0.765-0.6,1.275-1.38,1.53-2.34l4.23,1.02c-0.45,2.205-1.56,3.915-3.33,5.13Z" />
      <path d="M21.15 8.43h-2.52v-2.52h-2.07v2.52h-2.52v2.07h2.52v2.52h2.07v-2.52h2.52V8.43zM21.15 15.57h-2.52v-2.52h-2.07v2.52h-2.52v2.07h2.52v2.52h2.07v-2.52h2.52v-2.07z" />
    </svg>
  ),
  bash: (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>Bash</title>
      <path d="M0 0v24h24V0zm2.25 2.25h19.5v19.5H2.25zM4.5 4.5v1.5h1.125l-1.5 1.5-1.125-1.125v3.938h1.125L2.25 12l2.25 2.25-1.125 1.125h1.125v3.938L2.25 18l1.5 1.5h1.125V21H6v-1.5h1.125l1.5-1.5-1.125-1.125V13.5h1.125L7.5 12l2.25-2.25-1.125-1.125H7.5V4.5H6V6H4.5V4.5zm6.75 4.125L9 10.875l4.5 4.5 1.5-1.5-4.5-4.5zm0 0" />
    </svg>
  ),
  tcl: <Terminal />,
  git: (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>Git</title>
      <path d="M22.016 8.337l-7.36-7.36c-.47-.47-1.23-.47-1.7 0l-1.46 1.46c-.47.47-.47 1.23 0 1.7l1.7 1.7-3.23 3.23c-.22.22-.33.49-.33.77v6.62c0 .28.11.55.33.77l3.23 3.23c.47.47 1.23.47 1.7 0l1.46-1.46c.47-.47.47-1.23 0-1.7l-1.7-1.7 3.23-3.23c.22-.22.33-.49.33-.77V9.107c0-.28-.11-.55-.33-.77zM12.5 11.237a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-2.5 8.16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm0-10.82a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
    </svg>
  ),
  jenkins: (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor">
      <title>Jenkins</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.667c.733 0 1.333.6 1.333 1.333S12.733 5.333 12 5.333s-1.333-.6-1.333-1.333S11.267 2.667 12 2.667zm-1.333 4.333a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm2.666 0a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zM12 11a1.333 1.333 0 110-2.667 1.333 1.333 0 010 2.667zm0 1.667c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm-4.333 2.666a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm8.666 0a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zM12 18.667c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333z" />
    </svg>
  ),
  //EDA
  cadence: <BrainCircuit />,
  synopsys: <BrainCircuit />,
  xilinx: <Cpu />,
  // Fallbacks
  verilog: <Cpu />,
  systemverilog: <Waves />,
  vhdl: <CheckSquare />,
};

const getSkillKey = (skill: string) => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes('cadence')) return 'cadence';
  if (lowerSkill.includes('synopsys')) return 'synopsys';
  if (lowerSkill.includes('xilinx') || lowerSkill.includes('vivado')) return 'xilinx';
  if (lowerSkill.includes('c++')) return 'c++';
  if (lowerSkill.includes('python')) return 'python';
  if (lowerSkill.includes('bash')) return 'bash';
  if (lowerSkill.includes('tcl')) return 'tcl';
  if (lowerSkill.includes('git')) return 'git';
  if (lowerSkill.includes('jenkins')) return 'jenkins';
  if (lowerSkill.includes('verilog')) return 'verilog';
  if (lowerSkill.includes('systemverilog')) return 'systemverilog';
  if (lowerSkill.includes('vhdl')) return 'vhdl';
  if (lowerSkill.includes('c')) return 'c';
  return 'default';
};

const MonogramBadge = ({ text }: { text: string }) => (
  <span className="flex h-5 w-auto min-w-5 items-center justify-center rounded-sm bg-muted/50 px-1 text-[10px] font-bold text-foreground/80">
    {text}
  </span>
);

export const SkillIcon: React.FC<SkillIconProps> = ({ skill, className }) => {
  const key = getSkillKey(skill);
  let iconNode = iconMap[key] || <Cpu />;

  // Handle monograms
  if (skill.includes('UVM')) iconNode = <MonogramBadge text="UVM" />;
  if (skill.includes('SVA')) iconNode = <MonogramBadge text="SVA" />;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md p-0.5 text-muted-foreground/70 transition-colors group-hover:text-primary',
        className
      )}
    >
      {iconNode}
    </div>
  );
};
