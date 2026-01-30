import { Project, Capability, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ENG-2024-ARCH-HARD',
    title: 'Architectural Hardening: Multi-Zone Secure Gateway',
    category: 'Architecture & Engineering',
    description: 'Engineering and hardening of a layered Linux-based gateway architecture designed to isolate and regulate traffic between segmented security zones.',
    outcomes: [
      'Implemented cryptographically secured inter-node communication to prevent lateral interception.',
      'Enforced strict ingress and egress controls using stateful firewalling policies.',
      'Configured automated service recovery to preserve security posture during power or service failures.'
    ],
    techStack: ['Hardened Linux', 'iptables / nftables', 'mTLS', 'Bind9', 'systemd']
  },
  {
    id: 'ENG-2024-MA-RAT',
    title: 'Malware Research: Remcos RAT Analysis',
    category: 'Threat Intelligence',
    description: 'Conducted an end-to-end clinical analysis of the Remcos Remote Access Trojan (RAT) to deconstruct infection vectors, C2 infrastructure, and persistence mechanisms within enterprise Windows environments.',
    outcomes: [
      'Mapped adversarial tactics to the MITRE ATT&CK framework, specifically isolating T1204 (User Execution) and T1547 (Boot or Logon Autostart Execution).',
      'Deconstructed C2 communication patterns and credential exfiltration logic using interactive sandboxing and network traffic analysis.',
      'Developed a high-fidelity Incident Response (IR) playbook for the rapid detection, containment, and neutralization of Remcos-derived payloads.'
    ],
    techStack: ['ANY.RUN', 'Static/Dynamic Analysis', 'MITRE ATT&CK Mapping', 'C2 Traffic Profiling', 'Incident Response']
  },
  {
    id: 'ENG-2024-AD-EMU',
    title: 'Adversarial Emulation: Critical Infrastructure',
    category: 'Offensive Operations',
    description: 'Executed a high-fidelity adversary simulation targeting complex authentication workflows and exposed service surfaces within a transaction-heavy financial environment.',
    outcomes: [
      'Engineered custom bypass techniques for legacy MFA implementations.',
      'Documented and remediated sensitive credential leakage within automated CI/CD logging pipelines.',
      'Neutralized stealth persistence mechanisms identified during deep-packet inspection and service-layer analysis.'
    ],
    techStack: ['C2 Frameworks', 'Custom Payload Engineering', 'Static Analysis', 'Hardened Kernel Environments']
  },
  {
    id: 'ENG-2023-IR-DFR',
    title: 'Forensic Integrity & Incident Recovery',
    category: 'Digital Forensics',
    description: 'Led a post-breach forensic analysis focused on multi-stage ransomware propagation and lateral movement within a hybrid cloud environment.',
    outcomes: [
      'Reconstructed end-to-end attack timelines through advanced memory and registry artifact analysis.',
      'Identified and closed systemic vulnerabilities in RDP gateway configurations.',
      'Validated enterprise-wide system integrity following strategic containment and eradication phases.'
    ],
    techStack: ['Disk/Memory Forensics', 'Log Correlation', 'SIEM Integration', 'Evidence Chain-of-Custody']
  },
  {
    id: 'ENG-2024-ZT-SEG',
    title: 'Zero-Trust Segmentation: Regulated Application Environment',
    category: 'Architecture & Engineering',
    description: 'Design and implementation of a segmented access model enforcing identity-based trust boundaries between services in a regulated application environment.',
    outcomes: [
      'Enforced service identity verification using cryptographic trust and mTLS protocols.',
      'Reduced exposed network paths through granular micro-segmentation of application tiers.',
      'Automated audit-ready compliance evidence generation for identity-based access controls.'
    ],
    techStack: ['Infrastructure as Code', 'Secrets Management', 'mTLS', 'Cloud-Native Security Controls']
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Offensive Operations',
    description: 'Goal-oriented adversarial emulation designed to validate and stress-test enterprise detection controls.',
    points: [
      'Red Team Operations & Physical Penetration Testing',
      'L7 Application Security & Cloud Infrastructure Exploitation',
      'Custom Exploit Research & Vulnerability Discovery',
      'Advanced Payload Obfuscation & Evasion Techniques'
    ]
  },
  {
    title: 'Digital Forensics & IR',
    description: 'Evidence-based investigative workflows for threat containment and operational recovery.',
    points: [
      'Advanced Memory Forensics & Rootkit Detection',
      'Malware Reverse Engineering & Triage',
      'Post-Incident Remediation & Strategic Recovery',
      'Evidentiary Preservation for Legal Review'
    ]
  },
  {
    title: 'Detection Engineering',
    description: 'Synthesis of threat intelligence into low-noise, high-fidelity detection logic.',
    points: [
      'SIEM/XDR Pipeline Optimization & Content Engineering',
      'MITRE ATT&CK Framework Mapping',
      'Cloud Visibility & Telemetry Aggregation',
      'Automated Response Playbook Orchestration'
    ]
  },
  {
    title: 'Strategic Governance',
    description: 'Aligning technical security controls with organizational risk appetite and regulatory requirements.',
    points: [
      'Secure Architectural Design Review',
      'Threat Modeling & Attack Surface Management',
      'NIST/SOC2 Technical Control Verification',
      'Executive Risk Advisory & Technical Leadership'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Security Architecture Specialist',
    company: 'Regulated Infrastructure Project',
    period: 'Concluded Engagement',
    summary: 'Engineered a Zero-Trust access model for regulated application environments. Implemented identity-aware proxying and micro-segmentation strategies that enforced cryptographic service identities and reduced the internal attack surface by over 70%.'
  },
  {
    role: 'SOC Specialist & Malware Researcher',
    company: 'Security Operations Center (Project-Based)',
    period: 'Concluded Engagement',
    summary: 'Led technical investigations into sophisticated Remote Access Trojans (RATs). Architected detection logic and response strategies based on clinical sandbox analysis and malware behavior profiling to mitigate systemic risks in enterprise SOC environments.'
  },
  {
    role: 'Infrastructure Security Engineer',
    company: 'Institute of Accountancy Arusha',
    period: 'Concluded Engagement',
    summary: 'Architecting hardened security gateways and isolated network zones to protect research and administrative assets. Implementing multi-layered defense strategies, including encrypted transit protocols, centralized DNS filtering, and zero-trust access controls to eliminate data exfiltration paths.'
  },
  {
    role: 'Security Assessment Lead',
    company: 'Institute of Accountancy Arusha',
    period: 'Concluded Engagement',
    summary: 'Directing comprehensive vulnerability management programs. Conducting targeted adversarial simulations to identify and remediate security gaps across diverse technology stacks and legacy infrastructure.'
  },
  {
    role: 'Systems Integrity Specialist',
    company: 'Katoro Health Center',
    period: 'Concluded Engagement',
    summary: 'Optimized and secured critical healthcare infrastructure (GoT-HoMIS), ensuring high-availability and forensic readiness for patient data systems through network segmentation and redundant gateway management.'
  },
  {
    role: 'Network Infrastructure Engineer',
    company: 'Ukerewe District Council',
    period: 'Concluded Engagement',
    summary: 'Engineered and maintained organization-wide network resilience. Deployed secure LAN architectures and conducted routine security audits to ensure operational uptime and data integrity.'
  }
];