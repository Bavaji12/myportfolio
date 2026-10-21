import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  FileText,
  Shield,
  Layers,
  Bug,
} from 'lucide-react'
import { QA_SCENARIOS, type QaScenario } from '../data/qualityLab'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'

export const QualityLabSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(QA_SCENARIOS[0].id)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(-1)
  const [executionLogs, setExecutionLogs] = useState<string[]>([])
  const [simulationCompleted, setSimulationCompleted] = useState<boolean>(false)
  const [showDefectReport, setShowDefectReport] = useState<boolean>(false)

  const consoleEndRef = useRef<HTMLDivElement>(null)

  const currentScenario: QaScenario =
    QA_SCENARIOS.find((s) => s.id === activeScenarioId) || QA_SCENARIOS[0]

  useEffect(() => {
    // Reset state on scenario change
    setIsRunning(false)
    setCurrentStepIdx(-1)
    setExecutionLogs([
      `[QA LAB INITIALIZED] Ready to execute ${currentScenario.testCaseId}: "${currentScenario.title}"`,
      `[PRECONDITIONS VERIFIED] ${currentScenario.preconditions.length} conditions validated.`,
    ])
    setSimulationCompleted(false)
    setShowDefectReport(false)
  }, [activeScenarioId])

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollTop = consoleEndRef.current.scrollHeight
    }
  }, [executionLogs])

  const runSimulation = () => {
    if (isRunning) return
    setIsRunning(true)
    setSimulationCompleted(false)
    setCurrentStepIdx(0)
    setExecutionLogs((prev) => [
      ...prev,
      `--- INITIATING AUTOMATED TEST SUITE [${currentScenario.testCaseId}] ---`,
    ])

    const steps = currentScenario.executionSteps
    let step = 0

    const executeNextStep = () => {
      if (step < steps.length) {
        const current = steps[step]
        setCurrentStepIdx(step)
        setExecutionLogs((prev) => [
          ...prev,
          `[STEP ${current.stepNumber}/${steps.length}] ${current.action}...`,
          `  -> Assertion: Expected "${current.expected}"`,
        ])

        step++
        setTimeout(executeNextStep, current.simulatedTimeMs)
      } else {
        // Complete execution
        setIsRunning(false)
        setSimulationCompleted(true)
        if (currentScenario.status === 'PASS') {
          setExecutionLogs((prev) => [
            ...prev,
            `[VERDICT: PASS] All ${steps.length} test assertions passed successfully.`,
            `Finished test case execution in deterministic sandbox.`,
          ])
        } else {
          setExecutionLogs((prev) => [
            ...prev,
            `[VERDICT: DEFECT DETECTED] Assertion failed on step 2! Server returned 500 instead of 400.`,
            `Defect report DEF-API-049 logged into tracking repository.`,
          ])
          setShowDefectReport(true)
        }
      }
    }

    setTimeout(executeNextStep, 300)
  }

  const resetSimulation = () => {
    setIsRunning(false)
    setCurrentStepIdx(-1)
    setSimulationCompleted(false)
    setShowDefectReport(false)
    setExecutionLogs([
      `[CONSOLE RESET] Suite reloaded. Select "Run Test Simulation" to begin test execution.`,
    ])
  }

  return (
    <section id="quality-lab" className="relative py-20 md:py-28 bg-[#070910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive QA Sandbox"
          title="Quality Assurance Lab"
          subtitle="Explore authentic test case design, deterministic simulation execution, boundary analysis, and defect reporting."
        />

        {/* Disclaimer Notice */}
        <div className="mb-8 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs font-mono text-cyan-300 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Simulated QA Workbench: Deterministic local demonstrations showing testing methodologies, edge-case assertions, and formal defect logging.
            </span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-cyan-900/60 text-[10px] text-cyan-200 uppercase">
            Interactive
          </span>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {QA_SCENARIOS.map((sc) => {
            const isSelected = sc.id === activeScenarioId
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                disabled={isRunning}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-50 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'bg-[#0D1220] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <span className="font-bold">{sc.testCaseId}</span>
                <span className="hidden md:inline text-slate-500">•</span>
                <span className="truncate max-w-[140px] md:max-w-none">{sc.title}</span>
                {sc.status === 'DEFECT DETECTED' && (
                  <span className="w-2 h-2 rounded-full bg-rose-500 ml-1" title="Defect Scenario" />
                )}
              </button>
            )
          })}
        </div>

        {/* Main QA Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Test Case Specification Panel (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-[#0D1220]/90 border border-slate-800 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                    {currentScenario.testCaseId}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentScenario.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      currentScenario.status === 'PASS'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50'
                        : 'bg-rose-950/60 text-rose-400 border-rose-800/50'
                    }`}
                  >
                    Expected: {currentScenario.status}
                  </span>
                </div>
              </div>

              {/* Title & Objective */}
              <h3 className="text-lg font-bold text-white mb-2">
                {currentScenario.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                <span className="text-cyan-400 font-mono font-semibold">Objective: </span>
                {currentScenario.objective}
              </p>

              {/* Preconditions */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Preconditions</span>
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {currentScenario.preconditions.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Test Steps */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Test Steps</span>
                </h4>
                <ol className="space-y-1.5 text-xs text-slate-300">
                  {currentScenario.testSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Expected Result */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div className="font-mono text-cyan-400 font-semibold mb-1">
                  Expected Result Specification:
                </div>
                <div className="text-slate-300 leading-relaxed">
                  {currentScenario.expectedResult}
                </div>
              </div>

              {/* Control Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <Button
                  onClick={runSimulation}
                  disabled={isRunning}
                  variant="primary"
                  size="md"
                  icon={<Play className="w-4 h-4 fill-current" />}
                >
                  {isRunning ? 'Executing Suite...' : 'Run Test Simulation'}
                </Button>

                <Button
                  onClick={resetSimulation}
                  disabled={isRunning}
                  variant="outline"
                  size="md"
                  icon={<RotateCcw className="w-4 h-4" />}
                >
                  Reset
                </Button>

                {currentScenario.defectReport && (
                  <Button
                    onClick={() => setShowDefectReport(!showDefectReport)}
                    variant="ghost"
                    size="sm"
                    className="text-rose-400 hover:text-rose-300"
                    icon={<Bug className="w-4 h-4" />}
                  >
                    {showDefectReport ? 'Hide Defect Report' : 'View Defect Report'}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Execution Console (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-[#090C15] border border-cyan-500/25 shadow-2xl overflow-hidden flex flex-col h-[520px]">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0D1220] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    qa-runner@bavaji: ~/{currentScenario.testCaseId.toLowerCase()}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isRunning ? 'EXEC' : 'READY'}</span>
                </div>
              </div>

              {/* Step Progress Bar */}
              <div className="h-1 bg-slate-800 w-full">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300"
                  style={{
                    width: `${
                      currentStepIdx >= 0
                        ? ((currentStepIdx + 1) / currentScenario.executionSteps.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              {/* Console Output Screen */}
              <div
                ref={consoleEndRef}
                className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 text-slate-300 select-text"
              >
                {executionLogs.map((log, idx) => {
                  const isPass = log.includes('PASS')
                  const isDefect = log.includes('DEFECT') || log.includes('failed')
                  const isStep = log.includes('[STEP')

                  return (
                    <div
                      key={idx}
                      className={`leading-relaxed ${
                        isPass
                          ? 'text-emerald-400 font-bold'
                          : isDefect
                          ? 'text-rose-400 font-bold'
                          : isStep
                          ? 'text-cyan-300 font-semibold'
                          : 'text-slate-400'
                      }`}
                    >
                      {log}
                    </div>
                  )
                })}
              </div>

              {/* Status Footer Banner */}
              <div className="p-3 bg-[#0D1220] border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  {simulationCompleted ? (
                    currentScenario.status === 'PASS' ? (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>VERIFIED: PASS</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-rose-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span>ASSERTION FAIL • BUG LOGGED</span>
                      </span>
                    )
                  ) : (
                    <span className="text-slate-500">
                      {isRunning ? 'Execution in progress...' : 'Simulation idle'}
                    </span>
                  )}
                </div>

                <div className="text-[11px] text-slate-500">
                  Steps: {currentScenario.executionSteps.length}
                </div>
              </div>
            </div>

            {/* Expandable Defect Report for Bug Scenario */}
            <AnimatePresence>
              {showDefectReport && currentScenario.defectReport && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-2xl bg-[#14080D] border border-rose-500/40 p-6 text-xs font-mono shadow-2xl space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-rose-900/50">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <Bug className="w-4 h-4" />
                      <span>{currentScenario.defectReport.defectId}: {currentScenario.defectReport.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                        Severity: {currentScenario.defectReport.severity}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                        {currentScenario.defectReport.priority}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Environment: </span>
                    <span className="text-slate-300">{currentScenario.defectReport.environment}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Root Cause Analysis: </span>
                    <p className="text-rose-300/90 mt-1 leading-relaxed">
                      {currentScenario.defectReport.rootCauseAnalysis}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 font-semibold">Recommended Fix: </span>
                    <p className="text-emerald-400/90 mt-1 leading-relaxed">
                      {currentScenario.defectReport.recommendedFix}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
