const flags = {
    npcflag: [
        { bit: 1, name: "Gossip" },
        { bit: 2, name: "Quest Giver" },
        { bit: 16, name: "Trainer" },
        { bit: 32, name: "Class Trainer" },
        { bit: 64, name: "Profession Trainer" },
        { bit: 128, name: "Vendor" },
        { bit: 256, name: "Vendor Ammo" },
        { bit: 512, name: "Vendor Food" },
        { bit: 1024, name: "Vendor Poison" },
        { bit: 2048, name: "Vendor Reagent" },
        { bit: 4096, name: "Repairer" },
        { bit: 8192, name: "Flight Master" },
        { bit: 16384, name: "Spirit Healer" },
        { bit: 32768, name: "Spirit Guide" },
        { bit: 65536, name: "Innkeeper" },
        { bit: 131072, name: "Banker" },
        { bit: 262144, name: "Petitioner" },
        { bit: 524288, name: "Tabard Designer" },
        { bit: 1048576, name: "Battlemaster" },
        { bit: 2097152, name: "Auctioneer" },
        { bit: 4194304, name: "Stable Master" },
        { bit: 8388608, name: "Guild Banker" },
        { bit: 16777216, name: "Spellclick" },
        { bit: 67108864, name: "Mailbox" }
    ],
    unit_flags: [
        { bit: 1, name: "UNIT_FLAG_SERVER_CONTROLLED" },
        { bit: 2, name: "UNIT_FLAG_NON_ATTACKABLE" },
        { bit: 4, name: "UNIT_FLAG_DISABLE_MOVE" },
        { bit: 8, name: "UNIT_FLAG_PLAYER_CONTROLLED" },
        { bit: 16, name: "UNIT_FLAG_RENAME" },
        { bit: 32, name: "UNIT_FLAG_PREPARATION" },
        { bit: 64, name: "UNIT_FLAG_UNK_6" },
        { bit: 128, name: "UNIT_FLAG_NOT_ATTACKABLE_1" },
        { bit: 256, name: "UNIT_FLAG_IMMUNE_TO_PC" },
        { bit: 512, name: "UNIT_FLAG_IMMUNE_TO_NPC" },
        { bit: 1024, name: "UNIT_FLAG_LOOTING" },
        { bit: 2048, name: "UNIT_FLAG_PET_IN_COMBAT" },
        { bit: 4096, name: "UNIT_FLAG_PVP" },
        { bit: 8192, name: "UNIT_FLAG_SILENCED" },
        { bit: 16384, name: "UNIT_FLAG_CANNOT_SWIM" },
        { bit: 32768, name: "UNIT_FLAG_SWIMMING" },
        { bit: 65536, name: "UNIT_FLAG_NON_ATTACKABLE_2" },
        { bit: 131072, name: "UNIT_FLAG_PACIFIED" },
        { bit: 262144, name: "UNIT_FLAG_STUNNED" },
        { bit: 524288, name: "UNIT_FLAG_IN_COMBAT" },
        { bit: 1048576, name: "UNIT_FLAG_TAXI_FLIGHT" },
        { bit: 2097152, name: "UNIT_FLAG_DISARMED" },
        { bit: 4194304, name: "UNIT_FLAG_CONFUSED" },
        { bit: 8388608, name: "UNIT_FLAG_FLEEING" },
        { bit: 16777216, name: "UNIT_FLAG_POSSESSED" },
        { bit: 33554432, name: "UNIT_FLAG_NOT_SELECTABLE" },
        { bit: 67108864, name: "UNIT_FLAG_SKINNABLE" },
        { bit: 134217728, name: "UNIT_FLAG_MOUNT" },
        { bit: 268435456, name: "UNIT_FLAG_UNK_28" },
        { bit: 536870912, name: "UNIT_FLAG_PREVENT_EMOTES_FROM_CHAT_TEXT" },
        { bit: 1073741824, name: "UNIT_FLAG_SHEATHE" },
        { bit: 2147483648, name: "UNIT_FLAG_IMMUNE" }
    ],
    unit_flags2: [
        { bit: 1, name: "UNIT_FLAG2_FEIGN_DEATH" },
        { bit: 2, name: "UNIT_FLAG2_HIDE_BODY" },
        { bit: 4, name: "UNIT_FLAG2_IGNORE_REPUTATION" },
        { bit: 8, name: "UNIT_FLAG2_COMPREHEND_LANG" },
        { bit: 16, name: "UNIT_FLAG2_MIRROR_IMAGE" },
        { bit: 32, name: "UNIT_FLAG2_DO_NOT_FADE_IN" },
        { bit: 64, name: "UNIT_FLAG2_FORCE_MOVEMENT" },
        { bit: 128, name: "UNIT_FLAG2_DISARM_OFFHAND" },
        { bit: 256, name: "UNIT_FLAG2_DISABLE_PRED_STATS" },
        { bit: 1024, name: "UNIT_FLAG2_DISARM_RANGED" },
        { bit: 2048, name: "UNIT_FLAG2_REGENERATE_POWER" },
        { bit: 4096, name: "UNIT_FLAG2_RESTRICT_PARTY_INTERACTION" },
        { bit: 8192, name: "UNIT_FLAG2_PREVENT_SPELL_CLICK" },
        { bit: 16384, name: "UNIT_FLAG2_ALLOW_ENEMY_INTERACT" },
        { bit: 32768, name: "UNIT_FLAG2_CANNOT_TURN" },
        { bit: 65536, name: "UNIT_FLAG2_UNK2" },
        { bit: 131072, name: "UNIT_FLAG2_PLAY_DEATH_ANIM" },
        { bit: 262144, name: "UNIT_FLAG2_ALLOW_CHEAT_SPELLS" }
    ],
    dynamicflags: [
        { bit: 0, name: "UNIT_DYNFLAG_NONE" },
        { bit: 1, name: "UNIT_DYNFLAG_LOOTABLE" },
        { bit: 2, name: "UNIT_DYNFLAG_TRACK_UNIT" },
        { bit: 4, name: "UNIT_DYNFLAG_TAPPED" },
        { bit: 8, name: "UNIT_DYNFLAG_TAPPED_BY_PLAYER" },
        { bit: 16, name: "UNIT_DYNFLAG_SPECIALINFO" },
        { bit: 32, name: "UNIT_DYNFLAG_DEAD" },
        { bit: 64, name: "UNIT_DYNFLAG_REFER_A_FRIEND" },
        { bit: 128, name: "UNIT_DYNFLAG_TAPPED_BY_ALL_THREAT_LIST" }
    ],
    type_flags: [
        { bit: 1, name: "CREATURE_TYPE_FLAG_TAMEABLE" },
        { bit: 2, name: "CREATURE_TYPE_FLAG_VISIBLE_TO_GHOSTS" },
        { bit: 4, name: "CREATURE_TYPE_FLAG_BOSS_MOB" },
        { bit: 8, name: "CREATURE_TYPE_FLAG_DO_NOT_PLAY_WOUND_PARRY_ANIMATION" },
        { bit: 16, name: "CREATURE_TYPE_FLAG_NO_FACTION_TOOLTIP" },
        { bit: 32, name: "CREATURE_TYPE_FLAG_MORE_AUDIBLE" },
        { bit: 64, name: "CREATURE_TYPE_FLAG_SPELL_ATTACKABLE" },
        { bit: 128, name: "CREATURE_TYPE_FLAG_INTERACT_WHILE_DEAD" },
        { bit: 256, name: "CREATURE_TYPE_FLAG_SKIN_WITH_HERBALISM" },
        { bit: 512, name: "CREATURE_TYPE_FLAG_SKIN_WITH_MINING" },
        { bit: 1024, name: "CREATURE_TYPE_FLAG_NO_DEATH_MESSAGE" },
        { bit: 2048, name: "CREATURE_TYPE_FLAG_ALLOW_MOUNTED_COMBAT" },
        { bit: 4096, name: "CREATURE_TYPE_FLAG_CAN_ASSIST" },
        { bit: 8192, name: "CREATURE_TYPE_FLAG_NO_PET_BAR" },
        { bit: 16384, name: "CREATURE_TYPE_FLAG_MASK_UID" },
        { bit: 32768, name: "CREATURE_TYPE_FLAG_SKIN_WITH_ENGINEERING" },
        { bit: 65536, name: "CREATURE_TYPE_FLAG_TAMEABLE_EXOTIC" },
        { bit: 131072, name: "CREATURE_TYPE_FLAG_USE_MODEL_COLLISION_SIZE" },
        { bit: 262144, name: "CREATURE_TYPE_FLAG_ALLOW_INTERACTION_WHILE_IN_COMBAT" },
        { bit: 524288, name: "CREATURE_TYPE_FLAG_COLLIDE_WITH_MISSILES" },
        { bit: 1048576, name: "CREATURE_TYPE_FLAG_NO_NAME_PLATE" },
        { bit: 2097152, name: "CREATURE_TYPE_FLAG_DO_NOT_PLAY_MOUNTED_ANIMATIONS" },
        { bit: 4194304, name: "CREATURE_TYPE_FLAG_IS_LINK_ALL" },
        { bit: 8388608, name: "CREATURE_TYPE_FLAG_INTERACT_ONLY_WITH_CREATOR" },
        { bit: 16777216, name: "CREATURE_TYPE_FLAG_DO_NOT_PLAY_UNIT_EVENT_SOUNDS" },
        { bit: 33554432, name: "CREATURE_TYPE_FLAG_HAS_NO_SHADOW_BLOB" },
        { bit: 67108864, name: "CREATURE_TYPE_FLAG_TREAT_AS_RAID_UNIT" },
        { bit: 134217728, name: "CREATURE_TYPE_FLAG_FORCE_GOSSIP" },
        { bit: 268435456, name: "CREATURE_TYPE_FLAG_DO_NOT_SHEATHE" },
        { bit: 536870912, name: "CREATURE_TYPE_FLAG_DO_NOT_TARGET_ON_INTERACTION" },
        { bit: 1073741824, name: "CREATURE_TYPE_FLAG_DO_NOT_RENDER_OBJECT_NAME" },
        { bit: 2147483648, name: "CREATURE_TYPE_FLAG_UNIT_IS_QUEST_BOSS" }
    ],
    mechanic_immune_mask: [
        { bit: 1, name: "MECHANIC_CHARM" },
        { bit: 2, name: "MECHANIC_DISORIENTED" },
        { bit: 4, name: "MECHANIC_DISARM" },
        { bit: 8, name: "MECHANIC_DISTRACT" },
        { bit: 16, name: "MECHANIC_FEAR" },
        { bit: 32, name: "MECHANIC_GRIP" },
        { bit: 64, name: "MECHANIC_ROOT" },
        { bit: 128, name: "MECHANIC_SLOW_ATTACK" },
        { bit: 256, name: "MECHANIC_SILENCE" },
        { bit: 512, name: "MECHANIC_SLEEP" },
        { bit: 1024, name: "MECHANIC_SNARE" },
        { bit: 2048, name: "MECHANIC_STUN" },
        { bit: 4096, name: "MECHANIC_FREEZE" },
        { bit: 8192, name: "MECHANIC_KNOCKOUT" },
        { bit: 16384, name: "MECHANIC_BLEED" },
        { bit: 32768, name: "MECHANIC_BANDAGE" },
        { bit: 65536, name: "MECHANIC_POLYMORPH" },
        { bit: 131072, name: "MECHANIC_BANISH" },
        { bit: 262144, name: "MECHANIC_SHIELD" },
        { bit: 524288, name: "MECHANIC_SHACKLE" },
        { bit: 1048576, name: "MECHANIC_MOUNT" },
        { bit: 2097152, name: "MECHANIC_INFECTED" },
        { bit: 4194304, name: "MECHANIC_TURN" },
        { bit: 8388608, name: "MECHANIC_HORROR" },
        { bit: 16777216, name: "MECHANIC_INVULNERABILITY" },
        { bit: 33554432, name: "MECHANIC_INTERRUPT" },
        { bit: 67108864, name: "MECHANIC_DAZE" },
        { bit: 134217728, name: "MECHANIC_DISCOVERY" },
        { bit: 268435456, name: "MECHANIC_IMMUNE_SHIELD" },
        { bit: 536870912, name: "MECHANIC_SAPPED" },
        { bit: 1073741824, name: "MECHANIC_ENRAGED" }
    ],
    spell_school_immune_mask: [
        { bit: 1, name: "SPELL_SCHOOL_MASK_NORMAL" },
        { bit: 2, name: "SPELL_SCHOOL_MASK_HOLY" },
        { bit: 4, name: "SPELL_SCHOOL_MASK_FIRE" },
        { bit: 8, name: "SPELL_SCHOOL_MASK_NATURE" },
        { bit: 16, name: "SPELL_SCHOOL_MASK_FROST" },
        { bit: 32, name: "SPELL_SCHOOL_MASK_SHADOW" },
        { bit: 64, name: "SPELL_SCHOOL_MASK_ARCANE" }
    ],
    flags_extra: [
        { bit: 1, name: "CREATURE_FLAG_EXTRA_INSTANCE_BIND" },
        { bit: 2, name: "CREATURE_FLAG_EXTRA_CIVILIAN" },
        { bit: 4, name: "CREATURE_FLAG_EXTRA_NO_PARRY" },
        { bit: 8, name: "CREATURE_FLAG_EXTRA_NO_PARRY_HASTEN" },
        { bit: 16, name: "CREATURE_FLAG_EXTRA_NO_BLOCK" },
        { bit: 32, name: "CREATURE_FLAG_EXTRA_NO_CRUSHING_BLOWS" },
        { bit: 64, name: "CREATURE_FLAG_EXTRA_NO_XP" },
        { bit: 128, name: "CREATURE_FLAG_EXTRA_TRIGGER" },
        { bit: 256, name: "CREATURE_FLAG_EXTRA_NO_TAUNT" },
        { bit: 512, name: "CREATURE_FLAG_EXTRA_NO_MOVE_FLAGS_UPDATE" },
        { bit: 1024, name: "CREATURE_FLAG_EXTRA_GHOST_VISIBILITY" },
        { bit: 2048, name: "CREATURE_FLAG_EXTRA_USE_OFFHAND_ATTACK" },
        { bit: 4096, name: "CREATURE_FLAG_EXTRA_NO_SELL_VENDOR" },
        { bit: 8192, name: "CREATURE_FLAG_EXTRA_IGNORE_COMBAT" },
        { bit: 16384, name: "CREATURE_FLAG_EXTRA_WORLDEVENT" },
        { bit: 32768, name: "CREATURE_FLAG_EXTRA_GUARD" },
        { bit: 65536, name: "CREATURE_FLAG_EXTRA_IGNORE_FEIGN_DEATH" },
        { bit: 131072, name: "CREATURE_FLAG_EXTRA_NO_CRIT" },
        { bit: 262144, name: "CREATURE_FLAG_EXTRA_NO_SKILL_GAINS" },
        { bit: 524288, name: "CREATURE_FLAG_EXTRA_OBEYS_TAUNT_DIMINISHING_RETURNS" },
        { bit: 1048576, name: "CREATURE_FLAG_EXTRA_ALL_DIMINISH" },
        { bit: 2097152, name: "CREATURE_FLAG_EXTRA_NO_PLAYER_DAMAGE_REQ" },
        { bit: 4194304, name: "CREATURE_FLAG_EXTRA_AVOID_AOE" },
        { bit: 8388608, name: "CREATURE_FLAG_EXTRA_NO_DODGE" },
        { bit: 16777216, name: "CREATURE_FLAG_EXTRA_MODULE" },
        { bit: 33554432, name: "CREATURE_FLAG_EXTRA_DONT_CALL_ASSISTANCE" },
        { bit: 67108864, name: "CREATURE_FLAG_EXTRA_IGNORE_ALL_ASSISTANCE_CALLS" },
        { bit: 134217728, name: "CREATURE_FLAG_EXTRA_DONT_OVERRIDE_SAI_ENTRY" },
        { bit: 268435456, name: "CREATURE_FLAG_EXTRA_DUNGEON_BOSS" },
        { bit: 536870912, name: "CREATURE_FLAG_EXTRA_IGNORE_PATHFINDING" },
        { bit: 1073741824, name: "CREATURE_FLAG_EXTRA_IMMUNITY_KNOCKBACK" },
        { bit: 2147483648, name: "CREATURE_FLAG_EXTRA_HARD_RESET" }
    ],
    racemask: [
        { bit: 1, name: "RACE_HUMAN" },
        { bit: 2, name: "RACE_ORC" },
        { bit: 4, name: "RACE_DWARF" },
        { bit: 8, name: "RACE_NIGHTELF" },
        { bit: 16, name: "RACE_UNDEAD_PLAYER" },
        { bit: 32, name: "RACE_TAUREN" },
        { bit: 64, name: "RACE_GNOME" },
        { bit: 128, name: "RACE_TROLL" },
        { bit: 256, name: "RACE_GOBLIN" },
        { bit: 512, name: "RACE_BLOODELF" },
        { bit: 1024, name: "RACE_DRAENEI" },
        { bit: 2048, name: "RACE_FEL_ORC" },
        { bit: 4096, name: "RACE_NAGA" },
        { bit: 8192, name: "RACE_BROKEN" },
        { bit: 16384, name: "RACE_SKELETON" },
        { bit: 32768, name: "RACE_VRYKUL" },
        { bit: 65536, name: "RACE_TUSKARR" },
        { bit: 131072, name: "RACE_FOREST_TROLL" },
        { bit: 262144, name: "RACE_TAUNKA" },
        { bit: 524288, name: "RACE_NORTHREND_SKELETON" },
        { bit: 1048576, name: "RACE_ICE_TROLL" }
    ],
};