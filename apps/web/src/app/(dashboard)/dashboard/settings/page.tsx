"use client";

import { Settings, User, Bell, Shield, Palette } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Settings
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          Manage your account, preferences, and privacy.
        </p>
      </div>

      <div className="space-y-6">
        <SettingsSection icon={User} title="Profile">
          <SettingsField label="Display Name" value="Student" />
          <SettingsField label="Email" value="student@ridgemont.academy" />
          <SettingsField label="Learner Level" value="Intermediate" />
          <SettingsField label="Preferred Mentor" value="Mx. Cipher" />
        </SettingsSection>

        <SettingsSection icon={Bell} title="Notifications">
          <SettingsToggle label="Daily AI Briefing" enabled />
          <SettingsToggle label="Mentor Messages" enabled />
          <SettingsToggle label="Course Updates" enabled />
          <SettingsToggle label="Lab Reminders" enabled={false} />
        </SettingsSection>

        <SettingsSection icon={Palette} title="Appearance">
          <SettingsField label="Theme" value="Dark (default)" />
          <SettingsField label="Font Size" value="Medium" />
        </SettingsSection>

        <SettingsSection icon={Shield} title="Privacy & Safety">
          <SettingsToggle label="Share progress with guardians" enabled />
          <SettingsToggle label="Allow AI interaction logging" enabled />
          <SettingsField label="Data Export" value="Request export →" />
        </SettingsSection>
      </div>
    </div>
  );
}

function SettingsSection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-6">
      <div className="flex items-center gap-3 mb-5">
        <Icon className="h-5 w-5 text-ridgemont-electricBlue-400" />
        <h2 className="font-heading text-base font-semibold text-white">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SettingsField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-ridgemont-cassetteGray-300">{label}</span>
      <span className="text-sm text-ridgemont-cassetteGray-400">{value}</span>
    </div>
  );
}

function SettingsToggle({
  label,
  enabled,
}: {
  label: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-ridgemont-cassetteGray-300">{label}</span>
      <div
        className={`relative h-5 w-9 rounded-full transition-colors ${
          enabled
            ? "bg-ridgemont-arcadeGreen-500"
            : "bg-ridgemont-cassetteGray-600"
        }`}
      >
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "left-[18px]" : "left-0.5"
          }`}
        />
      </div>
    </div>
  );
}
